users = require('../models/users');

var usersController = {
    index: function(req, res) {
        if (req.user) {
            users.getAllUser(req.user.id, function(error, result) {
                if (error) {
                    res.render('users/index', {
                        layout: 'layout',
                        activeLeftmenuUsers: 'active',
                        activeNavbarUsers: 'active',
                        email: req.user.email
                    });
                } else {
                    res.render('users/index', {
                        layout: 'layout',
                        activeLeftmenuUsers: 'active',
                        activeNavbarUsers: 'active',
                        result: result,
                        email: req.user.email
                    });
                }
            });
        } else {
            res.render('users/index', {
                layout: 'layout',
                activeLeftmenuUsers: 'active',
                activeNavbarUsers: 'active'
            });
        }
    },
    addFriend: function(req, res) {
      users.addFriend(req.user.id, req.body.friend, function(err) {
        if (err) {
          console.log('There is an error in usersControllers');
          res.send({error: 'There is an error', success: ''});
        }
        else {
          console.log('Add successfully');
          res.send({error: '', success: 'Add successfully'});
        }
      });
    }
};

module.exports = usersController;
