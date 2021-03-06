const { validationResult } = require('express-validator')
const fs = require('fs')
const productsModel = require('../models/productsModel')
const { Product } = require('../database/models')
const { Category } = require('../database/models')
const { Op } = require('sequelize')
const path = require('path')



const productController = {

    list: async(req, res) => {

        const categoryList = await Category.findAll({
            order: [
                ['name', 'ASC']
            ],
        })

        const productList = await Product.findAll({
            order: [
                ['name', 'ASC']
            ],
        })



        res.render('products/list', { productList, categoryList })

    },

    search: async(req, res) => {

        console.log(req.query.search)
        const productList = await Product.findAll({
            where: {
                name: {
                  [Op.like]: '%'+req.query.search+'%' // `%${req.query.search}%`

                }
              }            
        })
        console.log(productList)
         
       
        return res.render('products/list', { productList })
        

    }, 
    novedades: async(req, res) => {

        console.log(req.query.search)
        const productList = await Product.findAll({
            where: {
                destacados: 1
              }            
        })
        res.render('products/list', { productList })

    },    
    destacados: async(req, res) => {

        console.log(req.query.search)
        const productList = await Product.findAll({
            where: {
                novedades: {
                  [Op.like]: 1 // `%${req.query.search}%`

                }
              }            
        })
        res.render('products/list', { productList })

    },       
    //const productList = productsModel.findAll()

    // aca leo el json y se lo paso al template
    // res.render('planets/list', { planetList: planetList })
    //res.render('products/list', { productList })
    //    },

    market: (req, res) => {
        return res.render('./products/market')
    },

    market_test: (req, res) => {
        const productList = productsModel.findAll()
            // aca leo el json y se lo paso al template
            // res.render('planets/list', { planetList: planetList })
        res.render('./products/market_test', { productList })

    },

    releases: (req, res) => {
        return res.render('./products/market')
    },

    important: (req, res) => {
        return res.render('./products/market')
    },


    detailProduct: (req, res) => {
        const { id } = req.params
            //const productDetail = productsModel.findByPk(id)

        Product.findByPk(id)
            .then(productDetail => {
                res.render('products/detailProduct', { productDetail })
            })
    },

    createProduct: async (req, res) => {
        const categories = await Category.findAll()

        return res.render('./products/createProduct', {
                    categories
            })
    },

    storeProduct: async (req, res) => {
        const formValidation = validationResult(req)

        const categories = await Category.findAll()

        /* si encuentro un error devuelvo el formulario
        con los valores ya cargados y los errores */
        /*console.log('formValidation.mapped()', formValidation.mapped())*/

        if (!formValidation.isEmpty()) {
            // borrar imagen
            if (req.file) {
                // primero chequeamos que exista
                fs.unlinkSync(req.file.path)
            }


            // tenemos errores
            const oldValues = req.body
            res.render('products/createProduct', { 
                categories,
                oldValues, 
                errors: formValidation.mapped() 
            })
            return
        }


        // Crear el objeto producto
        const { name, description, category_id, color, size, price } = req.body;

        // dentro de req.file va a venir la informaci??n del archivo
        const { file } = req

        // nuestra ruta al archivo
        const image = file.filename

        const newProduct = {
            name: name,
            description: description,
            category_id: category_id,
            color: color,
            size: size,
            price: price,
            image: '/img/' + image,
        }


        Product.create(newProduct)
            .then((productCreated) => {
                res.redirect('./detailProduct/'  + productCreated.id);
            })

    },

    editProduct: async (req, res) => {
        console.log(req.params.id);
        const { id } = req.params

        const categories = await Category.findAll()
        const productDetail = await Product.findByPk(id, {
            include: [{
                association: 'category',
            }]
            /* include: ['galaxy'] */
        })
        console.log(productDetail)

        res.render('products/updateProduct', {
                    productDetail,
                    categories
            });


    },
    update: async(req, res) => {
        const data = req.body;
        console.log(data);
        const { id } = req.params;
        // el producto original
        const productoOriginal = await Product.findByPk(id)
            // la imagen original: productoOriginal.image

        // dentro de req.file va a venir la informaci??n del archivo
        const { file } = req

        /* Si viene una imagen nueva, cargar la imagen nueva
        sino poner la original */
        let image

        if (file) {
            image = '/img/' + file.filename
        } else {
            image = productoOriginal.image
        }
        data.image = image

        await Product.update(data, {
            where: {
                id
            }
        })

        res.redirect('./detailProduct/' + id);
    },




    destroy: (req, res) => {
        Product.destroy({
            where: { id: req.params.id }

        })
        res.redirect('./list');
    },

    sizesTables: (req, res) => {
        res.render('products/sizes-tables')
    },


}

module.exports = productController