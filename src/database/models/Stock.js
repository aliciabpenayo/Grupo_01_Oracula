
module.exports = (sequelize, dataTypes) => {
    let alias = "Stock";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cantidad: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        updatedAt: {
            type: dataTypes.DATE,
            allowNull: false
        }
    }
    let config = {
        tableName: "Stocks",
        timestamps: false
    }
    
    const Stock = sequelize.define(alias, cols, config);

    Stock.associate = function(models){
        Stock.belongsTo(models.Product, {
            as: 'product',
            foreignKey: {
                name: 'productID',
                type: dataTypes.INTEGER,
                allowNull: false
            }
        })     

    }
    return Stock;
}