const { Product } = require('../../database/models')

module.exports = {
    async listProducts(req, res) {
        try {
            const products = await Product.findAndCountAll({
                attributes: ["id","name", "description","image"]
            })

            var productlist = products.rows.map(function(product){
                product.setDataValue("Detalle","http://127.0.0.1:3050/api/products/"+product.id)
                return product
 
            })
            var productlist = products.rows.map(function(product){
                product.setDataValue("image","http://127.0.0.1:3050"+product.image)
                return product
 
            })

            res.status(200).json({
                meta: {
                    status: "success",
                    total: products.count
                },
                data: {
                    products: 
                        productlist,
                }
            })
        } catch(err) {
            res.status(500).json({
                meta: {
                    status: "error"
                },
                error: {
                    msg: "Cant connect to database",
                    err
                }
            })
        }
    },

    async detailProduct(req, res) {
        const product = await Product.findByPk(req.params.id)   
        
        if (!product) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }
        
        const NewProduct =  {
            id: product.id,
            name: product.name,
            image: "http://127.0.0.1:3050"+product.image
        }

        res.status(200).json({
            meta: {
                status: "success",
            },
            data: {
                NewProduct,
            }
        })
    },

    async createProduct(req, res) {
        const { name, description, category, color, size, price, image, destacados, novedades } = req.body

        const product = await Product.create({
            name, 
            description, 
            category,
            color,
            size,
            price,
            image,
            destacados,
            novedades
        })

        res.status(201).json({
            meta: {
                status: "success",
            },
            data: {
                product,
            }
        })
    },

    async updateProduct(req, res) {
        const product = await Product.findByPk(req.params.id)

        if (!product) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }

        const { name, description, category, color, size, price, image, destacados, novedades } = req.body

        const productUpdated = await product.update({
            name, 
            description, 
            category,
            color,
            size,
            price,
            image,
            destacados,
            novedades
        })

        res.status(201).json({
            meta: {
                status: "success",
            },
            data: {
                product: productUpdated,
            }
        })
    },

    async destroyProduct(req, res) {
        const product = await Product.findByPk(req.params.id)

        if (!product) {
            res.status(404).json({
                meta: {
                    status: "not_found",
                },
            })
            return
        }

        await product.destroy()

        res.status(200).json({
            meta: {
                status: "success",
            },
        })
    }
}