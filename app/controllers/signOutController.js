var signOutController = {
    index: function(req, res) {
        req.logout();
        res.redirect('/');
    }
};

module.exports = signOutController;
