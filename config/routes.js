var router = require('express').Router;
var controllers = require('../app/controllers');

module.exports = function(app, passport) {
    var homeRoutes = router()
        .get('/', controllers.home.index);

    var aboutRoutes = router()
        .get('/', controllers.about.index);

    var usersRoutes = router()
        .get('/', controllers.users.index)
        .post('/',controllers.users.addFriend);

    var messagesRoutes = router()
        .get('/', controllers.messages.index)
        .get('/NewMessage', controllers.messages.sendMessage)
        .post('/NewMessage', controllers.messages.sendNewMessage);

    var signUpRoutes = router()
        .get('/', controllers.signup.index)
        .post('/', controllers.signup.signUp);

    var signInRoutes = router()
        .post('/', passport.authenticate('local_signIn', {
                failureRedirect: '/'
            }),
            function(req, res) {
                res.redirect('/Messages');
            });

    var signOutRoutes = router()
      .get('/', controllers.signout.index);

    app.use('/', homeRoutes);
    app.use('/About', aboutRoutes);
    app.use('/Users', usersRoutes);
    app.use('/Messages', messagesRoutes);
    app.use('/SignUp', signUpRoutes);
    app.use('/SignIn', signInRoutes);
    app.use('/SignOut', signOutRoutes);
};
