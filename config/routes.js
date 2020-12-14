module.exports.routes = {
  '/': 'LanguageController.setLanguage',
  '/:language': 'PageController.mainpage',
  '/:language/:param1': 'PageController.oneParam',
  '/login': 'UserController.login',
  '/password': 'UserController.password',
  '/sendfile': 'UserController.sendfile'
};
