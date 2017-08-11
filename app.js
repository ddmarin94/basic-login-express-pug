const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const cookieSession = require('cookie-session')
const readFile = require('fs-readfile-promise')
const PORT = 3000

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieSession({
  name: 'authExpressDemocookie',
  keys: ['randomwordaoknsfdpasweponfdosnfoouo'],
  maxAge: 24 * 60 * 60 * 1000
}))

app.get('/', (req, res) => {
  if (req.session.userLogged) {
    res.redirect('/welcome')
  } else {
    res.render('layout')
  }
})

app.get('/welcome', (req, res) => {
  if (!req.session.userLogged) {
    res.redirect('/register')
  } else {
    res.render('pages/welcome', {userLogged: req.session.userLogged})
    console.log(req.session.userLogged)
  }
})

app.get('/logout', (req, res) => {
  req.session.userLogged = null
  res.redirect('/')
  console.log('this should be null => ' + req.session.userLogged)
})

app.get('/register', (req, res) => {
  if (req.session.userLogged) {
    res.redirect('/welcome')
  } else {
    res.render('pages/register')
  }
})

app.post('/log', (req, res) => {
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
})

console.log('server running')

app.listen(PORT)
