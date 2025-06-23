import DHBaseItemSheet from '../api/base-item.mjs';
import { tagifyElement } from '../../../helpers/utils.mjs';

export default class ArmorSheet extends DHBaseItemSheet {
    /**@inheritdoc */
    static DEFAULT_OPTIONS = {
        classes: ['armor'],
        dragDrop: [{ dragSelector: null, dropSelector: null }]
    };

    /**@override */
    static PARTS = {
        header: { template: 'systems/daggerheart/templates/sheets/items/armor/header.hbs' },
        tabs: { template: 'systems/daggerheart/templates/sheets/global/tabs/tab-navigation.hbs' },
        description: { template: 'systems/daggerheart/templates/sheets/global/tabs/tab-description.hbs' },
        actions: {
            template: 'systems/daggerheart/templates/sheets/global/tabs/tab-actions.hbs',
            scrollable: ['.actions']
        },
        settings: {
            template: 'systems/daggerheart/templates/sheets/items/armor/settings.hbs',
            scrollable: ['.settings']
        }
    };

    /**@inheritdoc */
    async _preparePartContext(partId, context) {
        super._preparePartContext(partId, context);

        switch (partId) {
            case 'settings':
                context.features = this.document.system.features.map(x => x.value);
                break;
        }

        return context;
    }

    /**@inheritdoc */
    _attachPartListeners(partId, htmlElement, options) {
        super._attachPartListeners(partId, htmlElement, options);

        const featureInput = htmlElement.querySelector('.features-input');
        tagifyElement(featureInput, CONFIG.daggerheart.ITEM.armorFeatures, ArmorSheet.onFeatureSelect.bind(this));
    }

    /**
     * Callback function used by `tagifyElement`.
     * @param {Array<Object>} selectedOptions - The currently selected tag objects.
     */
    static async onFeatureSelect(selectedOptions ) {
        await this.document.update({ 'system.features': selectedOptions .map(x => ({ value: x.value })) });
        this.render({force: false, parts: ["settings"]});
    }
}
