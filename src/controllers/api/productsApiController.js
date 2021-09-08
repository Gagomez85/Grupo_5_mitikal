const { Product } = require('../../database/models')

module.exports = {
    async listProducts(req, res) {
        try {
            const products = await Product.findAndCountAll()

            res.status(200).json({
                meta: {
                    status: "success",
                    total: products.count
                },
                data: {
                    products: products.rows
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

        res.status(200).json({
            meta: {
                status: "success",
            },
            data: {
                product,
            }
        })
    },

    async createProduct(req, res) {
        const { name, discovered, hasRings } = req.body

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