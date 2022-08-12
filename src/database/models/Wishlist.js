
module.exports = (sequelize, dataTypes) => {
    let alias = "Wishlist";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    }
    let config = {
        tableName: "Wishlists",
        timestamps: false
    }

    const Wishlist = sequelize.define(alias, cols, config);

    Wishlist.associate = function (models) {
        Wishlist.belongsTo(models.User, {
            as: 'user',
            foreignKey: {
                name: 'userID',
                type: dataTypes.INTEGER,
                allowNull: false
            }
        })
    

    Wishlist.belongsToMany(models.Product, {
        as: 'product',
        through: 'ProductWishlist',
        foreignKey: 'wishlistID',
        otherKey: 'productID'
    })   
}   

    return Wishlist;
}