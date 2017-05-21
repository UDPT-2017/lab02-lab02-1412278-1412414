var LocalStrategy = require('passport-local').Strategy;
var passport = require('passport');
var User = require('../app/models/user');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        console.log('Id will be serialized is ' + user.id);
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        console.log('Id will be deserialized is ' + id);
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local_signIn', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, username, password, done) {
        console.log('the password we are checking is', password);
        User.localFindOne(username, password, function(err, user) {
            if (err) {
                return done(err);
            }

            if (!user) {
                return done(null, false);
            }

            return done(null, user);
        });
    }));
};
