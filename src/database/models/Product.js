module.exports = (sequelize, DataTypes) => {
    const alias = 'Product'
    const columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING

        },
        description: {
            type: DataTypes.STRING,
        },/*
        category: {
            type: DataTypes.STRING(200),
        },*/
        color: {
            type: DataTypes.STRING,
        },
        size: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING(200),
        },
        destacados: {
            type: DataTypes.BOOLEAN,
        },
        novedades: {
            type: DataTypes.BOOLEAN,
        },
        category_id: {
            type: DataTypes.INTEGER,
        }
    }
    const config = {
        tableName: 'products',
        timestamps: false,
        underscored: true

    }

    const ProductModel = sequelize.define(alias, columns, config);
    ProductModel.associate = models => {
        ProductModel.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'id'
        });
    }

    return ProductModel;
}