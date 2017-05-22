var pg = require('pg');
var pool = require('../lib/db.js');

var Messages =  {
  check: function(req, res) {

    pool.query("select * from messages , users  where idUserRec = $1 and messages.idUserSend = users.idUser ",[req.user.id], function(err, result) {
      if (err) {
        res.render('messages/index', {
          errorMessage: 'Connectting to your messages have failed !!'
        });
s      } else {
        console.log(result.rows[0].contenttext);
        res.render('messages/index',{
          layout: 'layout',
          result: result.rows})


      }

    });

  }
}

module.exports = Messages;
