var messagesController = {
  index: function(req, res) {
      res.render('messages/index', {
        layout: 'layout',
        cssFile: 'messages',
      })
  }
};

module.exports = messagesController;
