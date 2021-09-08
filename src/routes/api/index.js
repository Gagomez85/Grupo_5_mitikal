const express = require('express')
const apiRoutes = express.Router()

const productsApiRoutes = require('./productsApiRoutes')
const usersApiRoutes = require('./usersApiRoutes')

apiRoutes.use('/products', productsApiRoutes)
apiRoutes.use('/users', usersApiRoutes)

module.exports = apiRoutes