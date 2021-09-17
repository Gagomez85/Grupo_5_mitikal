const express = require('express')
const categoryApiRoutes = express.Router()
const categoryApiController = require('../../controllers/api/categoryApiController')

// endpoints
categoryApiRoutes.get('/', categoryApiController.listCategory)

module.exports = categoryApiRoutes