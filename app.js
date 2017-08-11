const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const cookieSession = require('cookie-session')
const PORT = 3000

const routesApp = require('./routes/')

app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieSession({
  name: 'authExpressDemocookie',
  keys: ['randomwordaoknsfdpasweponfdosnfoouo'],
  maxAge: 24 * 60 * 60 * 1000
}))

app.use(routesApp)

app.listen(PORT)

console.log(`server running ${PORT}`)
