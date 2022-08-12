
module.exports = (sequelize, dataTypes) => {
    let alias = "Image";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        url: {
            type: dataTypes.STRING,
            allowNull: false,
        }
    }
    let config = {
        tableName: "Images",
        timestamps: false
    }
    
    const Image = sequelize.define(alias, cols, config);

    
    Image.associate = function(models){
    Image.belongsTo(models.Product, {
        as: 'product',
        foreignKey: {
            name: 'productID',
            type: dataTypes.INTEGER,
            allowNull: false
        }
    })   
    }

    return Image;
}