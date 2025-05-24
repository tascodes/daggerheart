export default class DhpAdversaryRoll extends foundry.abstract.TypeDataModel {
    static defineSchema() {
        const fields = foundry.data.fields;

        return {
            origin: new fields.StringField({ required: true }),
            roll: new fields.StringField({}),
            total: new fields.NumberField({ integer: true }),
            modifiers: new fields.ArrayField(
                new fields.SchemaField({
                    value: new fields.NumberField({ integer: true }),
                    label: new fields.StringField({}),
                    title: new fields.StringField({})
                })
            ),
            advantageState: new fields.NumberField({ required: true, choices: [0, 1, 2], initial: 0 }),
            dice: new fields.EmbeddedDataField(DhpAdversaryRollDice),
            targets: new fields.ArrayField(
                new fields.SchemaField({
                    id: new fields.StringField({}),
                    name: new fields.StringField({}),
                    img: new fields.StringField({}),
                    difficulty: new fields.NumberField({ integer: true, nullable: true }),
                    evasion: new fields.NumberField({ integer: true }),
                    hit: new fields.BooleanField({ initial: false })
                })
            ),
            damage: new fields.SchemaField(
                {
                    value: new fields.StringField({}),
                    type: new fields.StringField({ choices: Object.keys(SYSTEM.GENERAL.damageTypes), integer: false })
                },
                { nullable: true, initial: null }
            )
        };
    }

    prepareDerivedData() {
        const diceKeys = Object.keys(this.dice.rolls);
        const highestIndex = 0;
        for (var index in diceKeys) {
            const resultIndex = Number.parseInt(index);
            if (highestIndex === resultIndex) continue;

            const current = this.dice.rolls[resultIndex];
            const highest = this.dice.rolls[highestIndex];

            if (current.value > highest.value) this.dice.rolls[highestIndex].discarded = true;
            else this.dice.rolls[resultIndex].discarded = true;
        }

        this.targets.forEach(target => {
            target.hit = target.difficulty ? this.total >= target.difficulty : this.total >= target.evasion;
        });
    }
}

class DhpAdversaryRollDice extends foundry.abstract.DataModel {
    static defineSchema() {
        const fields = foundry.data.fields;

        return {
            type: new fields.StringField({ required: true }),
            rolls: new fields.ArrayField(
                new fields.SchemaField({
                    value: new fields.NumberField({ required: true, integer: true }),
                    discarded: new fields.BooleanField({ initial: false })
                })
            )
        };
    }

    get rollTotal() {
        return this.rolls.reduce((acc, roll) => acc + roll.value, 0);
    }
}
