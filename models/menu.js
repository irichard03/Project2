module.exports = function(sequelize, DataTypes) {
    const Menu = sequelize.define("Menu", {
        dish: DataTypes.STRING,
        dishType: DataTypes.STRING,
        dishCost: DataTypes.DECIMAL(10, 2),
        dishPrice: DataTypes.DECIMAL(10, 2),
        alcohol: DataTypes.BOOLEAN,
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
        }
    });
    return Menu;
};
