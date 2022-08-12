
module.exports = (sequelize, dataTypes) => {
    let alias = "Attribute";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
        }, 
        unidad: {type: dataTypes.STRING},
       
    }
    let config = {
        tableName: "Attributes",
        timestamps: false
    }
    
    const Attribute = sequelize.define(alias, cols, config)

    
      
    Attribute.associate = function(models){
        Attribute.belongsTo(models.Subcategory, {
            as: 'subcategory',
            foreignKey: {
                name: 'subcategoryID',
                type: dataTypes.INTEGER,
                allowNull: false
            }
        })   

        Attribute.hasMany(models.Attribute, {
            as: 'atributeProduct',
            foreignKey: 'attributeProductID',
        })          

    }

    return Attribute;
}