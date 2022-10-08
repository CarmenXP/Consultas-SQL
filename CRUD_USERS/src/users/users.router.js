const router = require('express').Router()
const userServices = require('./users.services')

router.get('/users', userServices.AllUsers)
router.post('/users', userServices.createNewUser)
router.get('/users/:id', userServices.UserById )

module.exports = router