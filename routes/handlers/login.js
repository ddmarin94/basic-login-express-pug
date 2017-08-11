function login (req, res) {
  if (!req.session.userLogged) {
    res.render('pages/login')
  } else {
    res.redirect('/welcome')
  }
}

module.exports = login
