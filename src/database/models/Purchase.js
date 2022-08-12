

module.exports = (sequelize, dataTypes) => {
    let alias = "Purchase";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        montoTotal: {
            type: dataTypes.DECIMAL(10,2),
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE,
            allowNull: false
        },
        esCancelado: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            default: false
        }
    }
    let config = {
        tableName: "Purchases",
        timestamps: false
    }
    
    const Purchase = sequelize.define(alias, cols, config);

    
   Purchase.associate = function(models){
        Purchase.belongsTo(models.User, {
            as: 'user',
            foreignKey: {
            name: 'userID',
            type: dataTypes.INTEGER,
            allowNull: false
        }
        })   

        Purchase.hasMany(models.PurchaseProduct, {
            as: 'purchaseProduct',
            foreignKey: 'purchaseProductID',
        })

      



    }

    return Purchase;
}