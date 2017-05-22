var pg = require('pg');
var pool = require('../lib/db');

var signUp = {
    signUp: function(req, callback) {
        var message = {
            errorMessage: '',
            detailMessage: ''
        };
        if (req.body.user.password.length < 10) {
            message.errorMessage = 'Password has to have at least 10 characters';
            callback(message);

        } else {
            pool.query("select idUser from users where email = $1", [req.body.user.email], function(err, result) {
                if (err) {
                    message.errorMessage = 'There was an error when signing up';
                    callback(message);
                }
                console.log(result.rowCount);
                if (result.rowCount == 1) {
                    message.errorMessage = 'This email already exists';
                    callback(message);
                } else {
                    pool.query("insert into users (email, password, name, phone) VALUES ($1,$2, $3, $4)", [req.body.user.email, req.body.user.password, req.body.user.name, req.body.user.phone], function(err, result) {
                        if (err) {
                            message.errorMessage = 'There was an error when signing up';
                            callback(message);
                        } else {
                            message.detailMessage = 'Sign up sucessfully';
                            callback(message);
                        }
                    });
                }
            });
        }
    }
};

module.exports = signUp;
