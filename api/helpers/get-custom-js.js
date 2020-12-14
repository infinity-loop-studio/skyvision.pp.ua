module.exports = {
  friendlyName: 'Get slideshow',
  description: '',
  inputs: {
    moduleId: {
      type: 'number',
      required: true
    }
  },
  exits: {
    success: {
      outputFriendlyName: 'Slideshow',
    },
  },
  fn: async function (inputs, exits) {
    let script = await CustomJs.findOne({
      moduleId: inputs.moduleId
    });
    let body = '<script async src="' + script.src + '"></script>';
    return exits.success(body);
  }
};

