var pg = require('pg');

var pool = require('../lib/db');

var messages = {
    check: function(req, callback) {
        pool.query("select * from messages , users  where idUserRec = $1 and messages.idUserSend = users.idUser ", [req.user.id], function(err, result) {
            if (err) {
                callback('Connectting to your messages have failed !!', null);
            } else {
                callback(null, result.rows);
            }
        });
    },
    getAllFriends: function(id, callback) {
        pool.query('select f.friend, u.name, u.email from users u, friends f where u.iduser = f.friend and f.iduser = $1', [id], function(error, result) {
            if (error) {
                callback(error, null);
            }

            callback(error, result.rows);
        });
    },
    createNewMessage: function(req, callback) {
      pool.query('select iduser from users where email = $1', [req.body.email], function(err, res) {
        console.log(req.body.email);
        if (err) {
            callback(err, null);
        }
        else {
          pool.query('insert into messages(idUserRec, idUserSend, timesend, contenttext, status) values($1, $2, CURRENT_TIMESTAMP, $3, false)', [res.rows[0].iduser, req.user.id, req.body.content], function(error, result) {
              if (error) {
                  callback(error, null);
              } else {
                  callback(null, result);
              }
          });
        }
      });
    }
};

module.exports = messages;

