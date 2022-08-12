
module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
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
        tableName: "Categories",
        timestamps: false
    }
    
    const Category = sequelize.define(alias, cols, config);
    Category.associate = function(models){
        
        Category.hasMany(models.Product, {
            as: 'product',
            foreignKey: 'productID',
        })   
        Category.hasMany(models.Subcategory, {
            as: 'subcategory',
            foreignKey: 'subcategoryID',
        })  
    } 
    return Category;
}