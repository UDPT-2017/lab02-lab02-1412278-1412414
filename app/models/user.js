var pg = require('pg');
var pool = require('../lib/db');

var user = {
    findById: function(id, callback) {
        pool.query("select * from users where iduser = $1", [id], function(err, result) {
            if (err) {
                console.error(err);
                return callback(err, null);
            }
            console.log('Selected phone: ' + result.rows[0].phone);
            var user = {
                id: result.rows[0].iduser,
                name: result.rows[0].name,
                email: result.rows[0].email,
                password: result.rows[0].password,
                phone: result.rows[0].phone
            };

            return callback(err, user);
        });
    },
    localFindOne: function(email, password, callback) {
        pool.query("select iduser, email, password from users where email = $1 and password = $2", [email, password], function(err, result) {
            if (err) {
                return callback(err, null);
            }

            if (result.rowCount <= 0) {
                return callback(err, null);
            }

            var user = {
                id: result.rows[0].iduser
            };

            return callback(err, user);
        });
    }
};

module.exports = user;
