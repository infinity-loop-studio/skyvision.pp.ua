module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    systemName: {
      type: 'string'
    },
    menu: {
      model: 'menu'
    },
    parent: {
      type: 'number'
    },
    level: {
      type: 'number'
    },
    sort: {
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

