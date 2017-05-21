var aboutController = {
    index: function(req, res) {
        if (req.user) {
            res.render('about/index', {
                layout: 'layout',
                cssFile: 'about',
                activeNavbarAbout: 'active',
                activeLeftmenuAbout: 'active',
                email: req.user.email
            });
        } else {
            res.render('about/index', {
                layout: 'layout',
                cssFile: 'about',
                activeNavbarAbout: 'active',
                activeLeftmenuAbout: 'active'
            });
        }
    }
};

module.exports = aboutController;
