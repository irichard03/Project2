module.exports = function(sequelize, DataTypes) {
    const Menu = sequelize.define("Menu", {
        id: DataTypes.STRING,
        dish: DataTypes.STRING,
        dishType: DataTypes.STRING,
        dishCost: DataTypes.DECIMAL,
        dishPrice: DataTypes.DECIMAL,
        alcohol: DataTypes.BOOLEAN
    });
    return Menu;
};
