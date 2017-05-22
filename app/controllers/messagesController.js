var messages = require('../models/messages');

var messagesController = {
    index: function(req, res) {
        if (req.user) {
            messages.check(req, function(err, result) {
                res.render('messages/index', {
                    layout: 'layout',
                    activeLeftmenuMessages: 'active',
                    activeNavbarMessages: 'active',
                    email: req.user.email,
                    result: result,
                    isAuthenticated: req.user.id
                });
            });
        } else {
            res.render('messages/index', {
                layout: 'layout',
                activeLeftmenuUsers: 'active',
                activeNavbarUsers: 'active',
            });
        }
    },
    sendMessage: function(req, res) {
        if (req.user) {
            messages.getAllFriends(req.user.id, function(err, result) {
                if (err) {
                    res.render('messages/sendMessage', {
                        layout: 'layout',
                        activeLeftmenuMessages: 'active',
                        activeNavbarMessages: 'active',
                        email: req.user.email
                    });
                } else {
                    res.render('messages/sendMessage', {
                        layout: 'layout',
                        activeLeftmenuMessages: 'active',
                        activeNavbarMessages: 'active',
                        email: req.user.email,
                        result: result
                    });
                }
            });
        } else {
            res.redirect('/Messages');
        }
    },
    sendNewMessage: function(req, res) {
        if (req.user) {
            messages.createNewMessage(req, function(err, result) {
                if (err) {
                    res.redirect('/Messages/NewMessage');
                } else {
                    messages.getAllFriends(req.user.id, function(err, result2) {
                        if (err) {
                            res.redirect('/Messages/NewMessage');
                        } else {
                            res.render('messages/sendMessage', {
                                layout: 'layout',
                                activeLeftmenuMessages: 'active',
                                activeNavbarMessages: 'active',
                                email: req.user.email,
                                result: result2,
                                successMessage: 'successfully'
                            });
                        }
                    });
                }
            });
        } else {
            res.redirect('/Messages');
        }
    }
};

module.exports = messagesController;
