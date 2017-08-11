const fs = require('fs')

function registering (req, res) {
  const newUser = '\r\n' + req.body.registerMail + ':' + req.body.registerPass
  fs.appendFile('userinfo/users_txt.txt', newUser, (err) => {
    if (err) throw err
  })
  res.redirect('/login')
}

module.exports = registering
