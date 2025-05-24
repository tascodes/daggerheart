export default class NpcRollSelectionDialog extends FormApplication {
    constructor(experiences, resolve, isNpc) {
        super({}, {});

        this.experiences = experiences;
        this.resolve = resolve;
        this.selectedExperiences = [];
        this.data = {
            advantage: null
        };
    }

    get title() {
        return 'Roll Options';
    }

    static get defaultOptions() {
        const defaults = super.defaultOptions;
        const overrides = {
            height: 'auto',
            width: 500,
            id: 'roll-selection',
            template: 'systems/daggerheart/templates/views/npcRollSelection.hbs',
            closeOnSubmit: false,
            submitOnChange: true,
            classes: ['daggerheart', 'views', 'npc-roll-selection']
        };

        const mergedOptions = foundry.utils.mergeObject(defaults, overrides);

        return mergedOptions;
    }

    async getData() {
        const context = super.getData();
        context.advantage = this.data.advantage;
        context.experiences = Object.values(this.experiences).map(x => ({
            ...x,
            selected: this.selectedExperiences.find(selected => selected.id === x.id),
            value: `${x.value >= 0 ? '+' : '-'}${x.value}`
        }));

        return context;
    }

    activateListeners(html) {
        super.activateListeners(html);

        html.find('.advantage').click(_ => this.updateIsAdvantage(true));
        html.find('.disadvantage').click(_ => this.updateIsAdvantage(false));
        html.find('.roll-button').click(this.finish.bind(this));
        html.find('.experience-chip').click(this.selectExperience.bind(this));
    }

    updateIsAdvantage(advantage) {
        this.data.advantage = this.data.advantage === advantage ? null : advantage;
        this.render();
    }

    selectExperience(event) {
        const experience = Object.values(this.experiences).find(experience => experience.id === event.currentTarget.id);
        this.selectedExperiences = this.selectedExperiences.find(x => x.id === experience.id)
            ? this.selectedExperiences.filter(x => x.id !== experience.id)
            : [...this.selectedExperiences, experience];

        this.render();
    }

    finish() {
        this.resolve({ ...this.data, experiences: this.selectedExperiences });
        this.close();
    }
}
