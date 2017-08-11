function register (req, res) {
  if (req.session.userLogged) {
    res.redirect('/welcome')
  } else {
    res.render('pages/register')
  }
}

module.exports = register
