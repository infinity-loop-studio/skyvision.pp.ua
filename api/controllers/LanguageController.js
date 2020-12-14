module.exports = {
  setLanguage: async (req, res) => {
    language = await Languages.findOne({
      code: req.headers['accept-language']
    });
    if (language) {
      return res.redirect('/' + language.code);
    } else {
      return res.redirect('/ru');
    }
  }
};

