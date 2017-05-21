var messagesController = {
  index: function(req, res) {
    if (req.user) {
      res.render('messages/index', {
        layout: 'layout',
        activeLeftmenuMessages: 'active',
        activeNavbarMessages: 'active',
        email: req.user.email
      });
    }
    else {
      res.render('messages/index', {
        layout: 'layout',
        activeLeftmenuUsers: 'active',
        activeNavbarUsers: 'active',
      });
    }
  }
};

module.exports = messagesController;
