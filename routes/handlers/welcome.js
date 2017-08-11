function welcome (req, res) {
  if (!req.session.userLogged) {
    res.redirect('/register')
  } else {
    res.render('pages/welcome', {userLogged: req.session.userLogged})
  }
}

module.exports = welcome
