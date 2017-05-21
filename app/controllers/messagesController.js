var messagesController = {
  index: function(req, res) {
    if (req.user) {
      res.render('messages/index', {
        layout: 'layout',
        activeLeftmenuMessages: 'active',
        activeNavbarMessages: 'active',
        cssFile: 'messages',
        email: req.user.email
      });
    }
    else {
      res.render('messages/index', {
        layout: 'layout',
        activeLeftmenuUsers: 'active',
        activeNavbarUsers: 'active',
        cssFile: 'messages'
      });
    }
  }
};

module.exports = messagesController;
