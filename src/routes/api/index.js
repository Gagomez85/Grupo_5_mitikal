const express = require('express')
const apiRoutes = express.Router()

const productsApiRoutes = require('./productsApiRoutes')
const usersApiRoutes = require('./usersApiRoutes')
const categoryApiRoutes = require('./categoryApiRoutes')

apiRoutes.use('/products', productsApiRoutes)
apiRoutes.use('/users', usersApiRoutes)
apiRoutes.use('/category', categoryApiRoutes)

module.exports = apiRoutes