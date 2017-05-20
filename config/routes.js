var router = require('express').Router;
var controllers = require('../app/controllers');

module.exports = function(app, passport) {
  var homeRoutes = router()
    .get('/', controllers.home.index);

  var aboutRoutes = router()
    .get('/', controllers.about.index);

  var usersRoutes = router()
    .get('/', controllers.users.index);

  var messagesRoutes = router()
    .get('/', controllers.messages.index);

  app.use('/', homeRoutes);
  app.use('/About', aboutRoutes);
  app.use('/Users', usersRoutes);
  app.use('/Messages', messagesRoutes);
};
