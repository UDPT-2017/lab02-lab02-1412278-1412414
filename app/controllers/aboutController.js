var aboutController = {
  index: function(req, res) {
    res.render('about/index', {
      layout: 'layout',
      cssFile: 'about',
      activeNavbarAbout: 'active',
      activeLeftmenuAbout: 'active',
    });
  }
};

module.exports = aboutController;
