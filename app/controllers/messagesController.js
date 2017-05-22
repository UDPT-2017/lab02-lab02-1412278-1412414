var messages = require('../models/messages');

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
  },
  sendMessage: function(req, res) {
    if (req.user) {
      messages.getAllFriends(req.user.id, function(err, result) {
        if (err) {
          res.render('messages/sendMessage', {
            layout: 'layout',
            activeLeftmenuMessages: 'active',
            activeNavbarMessages: 'active',
            email: req.user.email
          });
        }
        else {
          res.render('messages/sendMessage', {
            layout: 'layout',
            activeLeftmenuMessages: 'active',
            activeNavbarMessages: 'active',
            email: req.user.email,
            result: result
          });
        }
      });
    }
    else {
      res.redirect('/Messages');
    }
  },
  sendNewMessage: function(req, res) {
    if (req.user) {
      messages.createNewMessage(req, function(err, res) {
        if (err) {
          res.send({success: '', err: 'There has been an error'});
        }
        else {
          res.send({success: 'successfully', err: ''});
        }
      });
    }
    else {
      res.redirect('/Messages');
    }
  }
};

module.exports = messagesController;
