const express = require('express')
const apiRoutes = express.Router()

const productsApiRoutes = require('./productsApiRoutes')

apiRoutes.use('/products', productsApiRoutes)

module.exports = apiRoutes