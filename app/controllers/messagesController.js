
var messages = require('../models/messages');
var messagesController = {
  index: function(req, res) {
      messages.check(req, res);
  }
};

module.exports = messagesController;
