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
    let customHtml = await CustomHtml.findOne({
      moduleId: inputs.moduleId
    });
    let body = customHtml.data;
    return exits.success(body);
  }
};

