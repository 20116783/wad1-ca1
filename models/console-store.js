'use strict';

import JsonStore from './json-store.js';

const consoleStore = {
    store: new JsonStore('./models/console-store.json', { consoleCollection: [] }),
    collection: 'consoleCollection',

    getAllCollections() {
        return this.store.findAll(this.collection);
    },

    getCollection(id) {
        return this.store.findOneBy(this.collection, (collection) => collection.id === id);
    }
};

export default consoleStore;