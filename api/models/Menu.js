module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    systemName: {
      type: 'string'
    },
    items: {
      collection: 'MenuItems',
      via: 'menu'
    }
  }
};

