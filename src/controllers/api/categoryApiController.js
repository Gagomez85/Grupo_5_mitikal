const { Category } = require('../../database/models')

module.exports = {
    async listCategory(req, res) {
        try {
            const category = await Category.findAndCountAll({
            })

            res.status(200).json({
                meta: {
                    status: "success",
                    total: category.count
                },
                data: {
                    categories: 
                        category,
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
}