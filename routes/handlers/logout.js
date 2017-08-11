function logout (req, res) {
  req.session.userLogged = null
  res.redirect('/login')
}

module.exports = logout
