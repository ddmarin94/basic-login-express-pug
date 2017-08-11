const express = require('express')
const router = express.Router()

const welcome = require('./handlers/welcome')
const login = require('./handlers/login')
const register = require('./handlers/register')
const logout = require('./handlers/logout')
const registering = require('./handlers/registering')
const log = require('./handlers/log')

router.get('/welcome', welcome)
router.get('/login', login)
router.get('/register', register)
router.get('/logout', logout)
router.post('/registering', registering)
router.post('/log', log)

module.exports = router
