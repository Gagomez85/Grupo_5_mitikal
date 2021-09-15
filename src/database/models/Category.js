module.exports = (sequelize, DataTypes) => {
    const alias = 'Category'
    const columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING

        }
    }
    const config = {
        tableName: 'category',
        timestamps: false,
        underscored: true

    }

    const CategoryModel = sequelize.define(alias, columns, config);
    CategoryModel.associate = models => {
        CategoryModel.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category_id',
        })
    }

    return CategoryModel;
}