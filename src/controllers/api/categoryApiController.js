const { Category } = require('../../database/models')
const { Product } = require('../../database/models')

module.exports = {
    async listCategory(req, res) {
        try {
            const category = await Category.findAndCountAll({
            })
            const products = await Product.findAndCountAll({
                attributes: ["category_id"]
                
            })
            console.log(products)
            

            
            const prueba = Product.count(
                { where: {'category_id': 1}
            })
            var categoryList = category.rows.map(function(category){
                category.setDataValue("Total", {prueba}
                )
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