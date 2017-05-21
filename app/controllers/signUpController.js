var signUp = require('../models/signUp');

var signUpController = {
  index: function(req, res) {
      res.render('signup/index');
  },
  signUp: function(req, res) {
    signUp.signUp(req, function(message) {
      if (message.errorMessage) {
        res.render('signup/index', {
            errorMessage: message.errorMessage
        });
      }
      else {
        res.render('signup/index', {
            detailMessage: message.detailMessage
        });
      }
    });
  }
};

module.exports = signUpController;
