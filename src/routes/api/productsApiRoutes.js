const express = require('express')
const productsApiRoutes = express.Router()
const productsApiController = require('../../controllers/api/productsApiController')

// endpoints
productsApiRoutes.get('/', productsApiController.listProducts)
productsApiRoutes.get('/listProductsAll', productsApiController.listProductsAll)
productsApiRoutes.get('/:id', productsApiController.detailProduct)
productsApiRoutes.post('/', productsApiController.createProduct)
productsApiRoutes.put('/:id', productsApiController.updateProduct)
productsApiRoutes.delete('/:id', productsApiController.destroyProduct)

module.exports = productsApiRoutes