const { HandlebarsApplicationMixin } = foundry.applications.api;

/**
 * @typedef {object} DragDropConfig
 * @property {string|null} dragSelector - A CSS selector that identifies draggable elements.
 * @property {string|null} dropSelector - A CSS selector that identifies drop targets.
 */

/**
 * @typedef {import("@client/applications/api/handlebars-application.mjs").HandlebarsRenderOptions} HandlebarsRenderOptions
 * @typedef {foundry.applications.types.ApplicationConfiguration & HandlebarsRenderOptions & { dragDrop?: DragDropConfig[] }} DHSheetV2Configuration
 */

/**
 * @template {Constructor<foundry.applications.api.DocumentSheet>} BaseDocumentSheet
 * @param {BaseDocumentSheet} Base - The base class to extend.
 * @returns {BaseDocumentSheet}
 */
export default function DHApplicationMixin(Base) {
  class DHSheetV2 extends HandlebarsApplicationMixin(Base) {
    /**
     * @param {DHSheetV2Configuration} [options={}]
     */
    constructor(options = {}) {
      super(options);
      /**
       * @type {foundry.applications.ux.DragDrop[]}
       * @private
       */
      this._dragDrop = this._createDragDropHandlers();
    }

    /**
     * The default options for the sheet.
     * @type {DHSheetV2Configuration}
     */
    static DEFAULT_OPTIONS = {
       classes: ['daggerheart', 'sheet', 'dh-style'],
      position: {
        width: 480,
        height: 'auto'
      },

      dragDrop: []
    };

    /* -------------------------------------------- */

    /**@inheritdoc */
    _attachPartListeners(partId, htmlElement, options) {
      super._attachPartListeners(partId, htmlElement, options);
      this._dragDrop.forEach(d => d.bind(htmlElement));
    }

    /* -------------------------------------------- */
    /*  Drag and Drop                               */
    /* -------------------------------------------- */

    /**
     * Creates drag-drop handlers from the configured options.
     * @returns {foundry.applications.ux.DragDrop[]}
     * @private
     */
    _createDragDropHandlers() {
      return this.options.dragDrop.map(d => {
        d.callbacks = {
          drop: this._onDrop.bind(this)
        };
        return new foundry.applications.ux.DragDrop.implementation(d);
      });
    }

    /**
     * Handle drop event.
     * @param {DragEvent} event
     * @protected
     */
    _onDrop(event) { }

    /* -------------------------------------------- */
    /*  Prepare Context                             */
    /* -------------------------------------------- */

    /**
     * Prepare the template context.
     * @param {object} options
     * @param {string} [objectPath='document']
     * @returns {Promise<object>}
     * @inheritdoc
     */
    async _prepareContext(options, objectPath = 'document') {
      const context = await super._prepareContext(options);
      context.config = CONFIG.daggerheart;
      context.source = this[objectPath];
      context.fields = this[objectPath].schema.fields;
      context.systemFields = this[objectPath].system ? this[objectPath].system.schema.fields : {};
      return context;
    }
  }

  return DHSheetV2;
}
