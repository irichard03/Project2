module.exports = function(sequelize, DataTypes) {
    const Menu = sequelize.define("Menu", {
        dish: DataTypes.STRING,
        dishType: DataTypes.STRING,
        dishCost: DataTypes.DECIMAL,
        dishPrice: DataTypes.DECIMAL,
        alcohol: DataTypes.BOOLEAN
    });
    return Menu;
};
