import BaseDataItem from './base.mjs';
import { ActionField } from '../fields/actionField.mjs';

export default class DHConsumable extends BaseDataItem {
    /** @inheritDoc */
    static get metadata() {
        return foundry.utils.mergeObject(super.metadata, {
            label: 'TYPES.Item.consumable',
            type: 'consumable',
            hasDescription: true,
            isQuantifiable: true,
            isInventoryItem: true,
            hasActions: true
        });
    }

    /** @inheritDoc */
    static defineSchema() {
        const fields = foundry.data.fields;
        return {
            ...super.defineSchema(),
            consumeOnUse: new fields.BooleanField({ initial: false })
        };
    }

    /* -------------------------------------------- */

    /**@override */
    static DEFAULT_ICON = 'systems/daggerheart/assets/icons/documents/items/round-potion.svg';

}
