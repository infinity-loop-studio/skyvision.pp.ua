module.exports = {
  friendlyName: 'Get module',
  description: '',
  inputs: {
    menuItemId: {
      type: 'number',
      required: true
    },
    req: {
      type: 'ref',
      required: true
    }
  },
  exits: {
    success: {
      outputFriendlyName: 'Module',
    }
  },

  fn: async function (inputs, exits) {
    var MobileDetect = require('mobile-detect');
    var md = new MobileDetect(inputs.req.headers['user-agent']);
    var device = [];
    if (md.mobile() !== null) {
      device = [2, 3];
    }
    if (md.mobile() === null) {
      device = [1, 3];
    }
    var modulesId = [];
    var positions = [];
    let parsedModule;
    let modulesTable = await ModulesTable.find({
      menuItemId: inputs.menuItemId
    });
    for (const module of modulesTable) {
      modulesId.push(module.moduleId);
    }
    modulesData = await Modules.find({
      id: modulesId,
      device: device,
      enabled: true
    }).sort('id ASC');
    for (const moduleData of modulesData) {
      switch (moduleData.systemName) {
        case 'mod_slideshow':
          parsedModule = await sails.helpers.getSlideshow.with({
            moduleId: moduleData.id
          });
          if (positions[moduleData.position] === undefined) {
            positions[moduleData.position] = [];
          }
          positions[moduleData.position].push(parsedModule);
          break;
        case 'mod_custom_js':
          parsedModule = await sails.helpers.getCustomJs.with({
            moduleId: moduleData.id
          });
          if (positions[moduleData.position] === undefined) {
            positions[moduleData.position] = [];
          }
          positions[moduleData.position].push(parsedModule);
          break;
        case 'mod_custom_html':
          parsedModule = await sails.helpers.getCustomHtml.with({
            moduleId: moduleData.id
          });
          if (positions[moduleData.position] === undefined) {
            positions[moduleData.position] = [];
          }
          positions[moduleData.position].push(parsedModule);
          break;
        case 'mod_menu':
          parsedModule = await sails.helpers.getMenu.with({
            moduleData: moduleData
          });
          if (positions[moduleData.position] === undefined) {
            positions[moduleData.position] = [];
          }
          positions[moduleData.position].push(parsedModule);
          break;
      }
    }
    return exits.success(positions);
  }
};

