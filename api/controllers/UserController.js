module.exports = {
  login: async (req, res) => {
    console.log(req.param('login'))
    var user = await Users.find({
      where: {
        systemName: {
          startsWith: req.param('login')
        }
      }
    });

    if (user.length === 0) {
      return res.json(404);
    } else {

      if (req.param('login') === user[0].systemName) {
        return res.json(201);
      }
      return res.ok();
    }

  },
  password: async (req, res) => {
    console.log(req.param('password'))

    var user = await Users.find({
      where: {
        password: {
          startsWith: req.param('password')
        }
      }
    });

    if (user.length === 0) {
      return res.json(404);
    } else {

      if (req.param('password') === user[0].password) {
        res.cookie('authorised', true, {signed: true});
        return res.json(201);
      }
      return res.ok();
    }

  },
  sendfile: async (req, res) => {
    console.log(require('path').resolve(sails.config.appPath, 'assets/images'));
    req.file('avatar').upload({
      dirname: require('path').resolve(sails.config.appPath, 'assets/images')
    },function (err, uploadedFiles) {
      if (err) return res.serverError(err);

      return res.json({
        message: uploadedFiles.length + ' file(s) uploaded successfully!'
      });
    });
  }
};

