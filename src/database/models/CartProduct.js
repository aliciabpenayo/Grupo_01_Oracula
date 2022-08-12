
module.exports = (sequelize, dataTypes) => {
    let alias = "CartProduct";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            as: 'CartProduct',
            primaryKey: true,
            autoIncrement: true
        }
    }
    let config = {
        tableName: "CartsProducts",
        timestamps: false
    }
    
    const CartProduct = sequelize.define(alias, cols, config)
    return CartProduct;
}