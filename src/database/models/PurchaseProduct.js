

module.exports = (sequelize, dataTypes) => {
    let alias = "PurchaseProduct";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        porcentajeDescuento: {
            type: dataTypes.INTEGER,
            allowNull: false,
            default: 0,
        },
        precioFinal: {
            type: dataTypes.DECIMAL(10,2),
            allowNull: false
        },
        cantidad: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }

    }
    let config = {
        tableName: "PurchasesProducts",
        timestamps: false
    }
    
    const PurchaseProduct = sequelize.define(alias, cols, config);

    PurchaseProduct.associate = function(models){
    PurchaseProduct.belongsTo(models.Purchase, {
        as: 'Purchase',
        foreignKey: {
            name: 'purchaseID',
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }),

    PurchaseProduct.belongsTo(models.Product, {
        as: 'Product',
        foreignKey: {
            name: 'productID',
            type: dataTypes.INTEGER,
            allowNull: false
        }
    })  
}

    return PurchaseProduct;
}