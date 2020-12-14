/**
 * Slides.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    header: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    image: {
      type: 'string'
    },
    moduleId: {
      type: 'number'
    },
    link: {
      type: 'string'
    },
    status: {
      type: 'boolean'
    }
  }
};

