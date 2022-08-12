
module.exports = (sequelize, dataTypes) => {
    let alias = "ProductWishlist";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }
    let config = {
        tableName: "ProductsWishlists",
        timestamps: false
    }
    
    const ProductWishlist = sequelize.define(alias, cols, config)
    return ProductWishlist;
}