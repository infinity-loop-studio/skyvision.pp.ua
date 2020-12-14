module.exports = {


  friendlyName: 'Get slideshow',


  description: '',


  inputs: {
    moduleData: {
      type: 'ref',
      required: true
    }
  },


  exits: {

    success: {
      outputFriendlyName: 'Slideshow',
    },

  },


  fn: async function (inputs, exits) {

    body = '';
    level = 1;
    levelDiference = undefined;
    style = '';
    id = '';

    // SELECT MENU TABLE
    menu = await Menu.findOne({
      systemName: inputs.moduleData.params.menuSystemName
    }).populate('items', {
      where: {
        status: true
      },
      sort: 'sort ASC'
    });

    // GET ALL MENU ITEMS
    menuItems = menu.items;

    // GET STYLE FROM
    if (inputs.moduleData.params.style !== '') {
      style = ' class="' + inputs.moduleData.params.style + '"';
    }

    if (inputs.moduleData.params.id !== '') {
      id = ' id="' + inputs.moduleData.params.id + '"';
    }

    if (inputs.moduleData.params.ItemsLevel !== 'all') {
      filteredItems = [];
      for (menuItem of menuItems) {
        if (menuItem.level === JSON.parse(inputs.moduleData.params.ItemsLevel)) {
          filteredItems.push(menuItem);
        }
      }
      menuItems = filteredItems;
    }

    body += '<ul' + id + style + '>';

    for (menuItem of menuItems) {
      if (menuItem.parent === 0 && level === menuItem.level) {
        if (menuItem.systemName !== 'separator') {
          body += '<li><a href="' + menuItem.link + '">' + menuItem.name + '</a></li>';
        }
        if (menuItem.systemName === 'separator') {
          body += '<li><span>' + menuItem.name + '</span></li>';
        }
      } else if (menuItem.parent === 1 && level === menuItem.level) {
        if (menuItem.systemName !== 'separator') {
          body += '<li><a href="' + menuItem.link + '">' + menuItem.name + '</a><ul>';
        }
        if (menuItem.systemName === 'separator') {
          body += '<li><span>' + menuItem.name + '</span><ul>';
        }
        level++;
      } else if (menuItem.parent === 0 && level !== menuItem.level) {
        levelDiference = level - menuItem.level;
        for (i = 0; i < levelDiference; i++) {
          body += '</ul></li>';
          level--;
        }
        if (menuItem.systemName !== 'separator') {
          body += '<li><a href="' + menuItem.link + '">' + menuItem.name + '</a></li>';
        }
        if (menuItem.systemName === 'separator') {
          body += '<li><span>' + menuItem.name + '</span></li>';
        }
      } else if (menuItem.parent === 1 && level !== menuItem.level) {
        levelDiference = level - menuItem.level;
        for (i = 0; i < levelDiference; i++) {
          body += '</ul></li>';
          level--;
        }
        if (menuItem.systemName !== 'separator') {
          body += '<li><a href="' + menuItem.link + '">' + menuItem.name + '</a><ul>';
        }
        if (menuItem.systemName === 'separator') {
          body += '<li><span>' + menuItem.name + '</span><ul>';
        }
        level++;
      }
    }
    for (i = 1; i < level; i++) {
      body += '</ul></li>';
    }
    body += '</ul>';
    return exits.success(body);
  }
};
