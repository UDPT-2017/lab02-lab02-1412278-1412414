var usersController = {
  index: function(req, res) {
      res.render('users/index', {
        title: 'Users'
      })
  }
};

module.exports = usersController;
