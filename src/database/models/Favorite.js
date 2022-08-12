
module.exports = (sequelize, dataTypes) => {
    let alias = "Favorite";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }        
    }
    let config = {
        tableName: "Favorites",
        timestamps: false
    }
    
    const Favorite = sequelize.define(alias, cols, config);

    
    Favorite.associate = function(models){
        Favorite.belongsTo(models.User, {
            as: 'user',
            foreignKey: {
                name: 'userID',
                type: dataTypes.INTEGER,
                allowNull: false
            }
        })   
        
        Favorite.belongsToMany(models.Product, {
            as: 'product',
            through: 'ProductFavorite',
            foreignKey: 'favoriteID',
            otherKey: 'productID'
        })   
       
       

    }
    return Favorite;
}