
module.exports = (sequelize, dataTypes) => {
    let alias = "Cart";
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
       
    }
    let config = {
        tableName: "Carts",
        timestamps: false
    }
    
    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models){
        Cart.belongsTo(models.User, {
            as: 'user',
            foreignKey: {
                name: 'userID',
                type: dataTypes.INTEGER,
                allowNull: false
            }
        })   

        Cart.belongsToMany(models.Product, {
            as: 'product',
            through: 'CartProduct',
            foreignKey: 'cartID',
            otherKey: 'productID'
        })   
       

    }
    return Cart;
}