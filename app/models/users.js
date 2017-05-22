var pg = require('pg');
var pool = require('../lib/db');

var users = {
  getAllUser: function(id, callback) {
    pool.query('select iduser, email, phone, name, case when iduser in (select friend from friends where iduser = $1) then 1 else 0 end as isfriend from users where iduser != $1', [id], function(error, result) {
      if (error) {
        callback(error, null);
      }

      callback(error, result.rows);
    });
  },
  addFriend: function(user, friend, callback) {
    console.log('user:' + user + ', friend: ' + friend);

    pool.query('select iduser from users where email = $1', [friend], function(err, res) {
      if (err) {
        callback(err);
      }

      pool.query('insert into friends(iduser, friend) values($1, $2)', [user, res.rows[0].iduser], function(err2, res2) {
        if (err) {
          callback(err2);
        }
        else {
          pool.query('insert into friends(iduser, friend) values($1, $2)', [res.rows[0].iduser, user], function(err3, res3) {
            if (err3) {
              console.error(err3);
              callback(err3);
            }
            else {
              callback(null);
            }
          });
        }
      });
    });
  }
};

module.exports = users;
