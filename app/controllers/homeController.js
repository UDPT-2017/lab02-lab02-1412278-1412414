var homeController = {
    index: function(req, res) {
        if (req.user) {
            console.log('Return email: ' + req.user.email);
            res.render('home/index', {
                layout: 'layout',
                cssFile: 'home',
                activeNavbarHome: 'active',
                activeLeftmenuHome: 'active',
                email: req.user.email
            });
        } else {
            res.render('home/index', {
                layout: 'layout',
                cssFile: 'home',
                activeNavbarHome: 'active',
                activeLeftmenuHome: 'active'
            });
        }
    }
};

module.exports = homeController;
