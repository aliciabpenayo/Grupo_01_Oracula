

module.exports = (sequelize, dataTypes) => {
    let alias = "AttributeProduct";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        valor: {
            type: dataTypes.STRING,
            allowNull: false,
        }// },
        // attributeID: {
        //     type: dataTypes.STRING,
        //     allowNull: false,
        //     references: {
        //         model: Attribute,
        //         key: 'id',
        //     }
        // },
        // productID: {
        //     type: dataTypes.STRING,
        //     allowNull: false,
        //     references: {
        //         model: Product,
        //         key: 'id',
          
        //     }
        // }
    }
    let config = {
        tableName: "AttributesProducts",
        timestamps: false
    }

    const AttributeProduct = sequelize.define(alias, cols, config);

    AttributeProduct.associate = function(models){
        AttributeProduct.belongsTo(models.Attribute, {
            as: 'attribute',
            foreignKey: {
                name: 'attributeID',
                type: dataTypes.INTEGER,
                allowNull: false
            }
        }),

        AttributeProduct.belongsTo(models.Product, {
            as: 'Product',
            foreignKey: {
                name: 'productID',
                type: dataTypes.INTEGER,
                allowNull: false
            }
        })  

      
    }

    return AttributeProduct;
}