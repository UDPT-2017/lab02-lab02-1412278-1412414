var homeController = {
  index: function(req, res) {
      res.render('home/index', {
        layout: 'layout',
        cssFile: 'home',
        activeNavbarHome: 'active',
        activeLeftmenuHome: 'active',
      });
  }
};

module.exports = homeController;
