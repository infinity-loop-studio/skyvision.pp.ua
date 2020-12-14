module.exports = {
  mainpage: async (req, res) => {
    var MobileDetect = require('mobile-detect');
    var md = new MobileDetect(req.headers['user-agent']);
    var template = '';
    if (md.mobile() !== null) {
      template = 'template/il_m_skyvision';
    }
    if (md.mobile() === null) {
      template = 'template/il_skyvision';
    }
    if (req.headers.host === 'skyvision.company' && md.mobile() !== null) {
      return res.redirect('https://m.skyvision.company');
    }
    if (req.headers.host === 'm.skyvision.company' && md.mobile() === null) {
      return res.redirect('https://skyvision.company');
    }
    let menuItem = await MenuItems.findOne({
      systemName: 'главная'
    });
    let positions = await sails.helpers.getModules.with({menuItemId: menuItem.id, req: req});
    return res.view(template, {
      positions: positions
    });
  },
  oneParam: async (req, res) => {
    var MobileDetect = require('mobile-detect');
    var md = new MobileDetect(req.headers['user-agent']);
    var template = '';
    if (md.mobile() !== null) {
      template = 'template/il_m_skyvision';
    }
    if (md.mobile() === null) {
      template = 'template/il_skyvision';
    }
    if (req.headers.host === 'skyvision.company' && md.mobile() !== null) {
      return res.redirect('https://m.skyvision.company/' + req.param('language') + '/' + req.param('param1'));
    }
    if (req.headers.host === 'm.skyvision.company' && md.mobile() === null) {
      return res.redirect('https://skyvision.company/' + req.param('language') + '/' + req.param('param1'));
    }
    let menuItem = await MenuItems.findOne({
      systemName: req.param('param1')
    });
    let positions = await sails.helpers.getModules.with({menuItemId: menuItem.id, req: req});

    return res.view(template, {
      positions: positions
    });
  }
};

