
module.exports = (sequelize, dataTypes) => {
    let alias = "Genre";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
        }
    }
    let config = {
        tableName: "Genres",
        timestamps: false
    }
    
    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = function(models){
       
        Genre.belongsToMany(models.Product, {
            as: 'product',
            through: 'ProductGenre',
            foreignKey: 'genreID',
            otherKey: 'productID'
        })   
    }


    
    return Genre;
}