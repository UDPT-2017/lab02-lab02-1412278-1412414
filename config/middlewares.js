var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');

module.exports = function(app, passport, express) {
    app.use(express.static('public'));
    app.use('/components', express.static('bower_components'));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(cookieParser('secret'));
    app.use(cookieSession({
        name: 'session',
        secret: 'secret'
    }));
//      app.use(session({
//          secret: 'secret',
//          resave: true,
//          saveUninitialized: true
//      }));
    app.use(passport.initialize());
    app.use(passport.session());
    require('./passport')(passport);

};
