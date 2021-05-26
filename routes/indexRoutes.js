const express = require('express')
const indexRoutes = express.Router()

const indexController = require('../controllers/indexController')

indexRoutes.get('/login', indexController.login)
indexRoutes.get('/reset_account', indexController.reset_account)
indexRoutes.get('/register', indexController.register)
indexRoutes.get('/market', indexController.market)
indexRoutes.get('/detalleProducto', indexController.detalleProducto)
indexRoutes.get('/cart', indexController.cart)

module.exports = indexRoutes