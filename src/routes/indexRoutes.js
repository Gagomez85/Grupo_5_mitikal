const express = require('express')
const indexRoutes = express.Router()
const multer = require('multer')
const path = require('path')

const indexController = require('../controllers/indexController')


indexRoutes.get('/', indexController.index)


module.exports = indexRoutes