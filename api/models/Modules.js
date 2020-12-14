module.exports = {
  attributes: {
    systemName: {
      type: 'string'
    },
    position: {
      type: 'string'
    },
    params: {
      type: 'json'
    },
    device: {
      type: 'number'
    },
    enabled:{
      type: 'boolean',
      defaultsTo: true
    }
  }
};

