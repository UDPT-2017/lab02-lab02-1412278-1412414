var pg = require('pg');
var pool = require('../lib/db');

var messages = {
  getAllFriends: function(id, callback) {
    pool.query('select f.friend, u.name, u.email from users u, friends f where u.iduser = f.friend and f.iduser = $1', [id], function(error, result) {
      if (error) {
        callback(error, null);
      }

      callback(error, result.rows);
    });
  },
  sendNewMessage: function(req, callback) {
    pool.query('insert into messages() values()', [], function(err, result) {
      if (err) {
        callback(err, null);
      }
      else {
        callback(null, result);
      }
    });
  }
};

module.exports = messages;
