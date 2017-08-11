const readFile = require('fs-readfile-promise')

function log (req, res) {
  const { mail, password } = req.body

  readFile('userinfo/users_txt.txt', 'utf-8')
  .then(contentData => contentData.split('\r\n'))
  .then(aAuthLines => aAuthLines.some(authLine => {
    return authLine === `${mail}:${password}`
  }))
  .then(bDoesExist => {
    if (bDoesExist) {
      req.session.userLogged = mail
      res.redirect('/welcome')
    } else {
      res.redirect('/register')
    }
  })
}

module.exports = log
