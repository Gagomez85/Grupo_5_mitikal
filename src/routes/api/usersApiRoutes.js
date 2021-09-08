const express = require('express')
const usersApiRoutes = express.Router()
const usersApiController = require('../../controllers/api/usersApiController')

// endpoints
usersApiRoutes.get('/',usersApiController.listUsers)
usersApiRoutes.get('/:id', usersApiController.detailUser)
usersApiRoutes.post('/', usersApiController.createUser)
usersApiRoutes.put('/:id', usersApiController.updateUser)
usersApiRoutes.delete('/:id', usersApiController.destroyUser)

module.exports = usersApiRoutes