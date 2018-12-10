module.exports = function(sequelize, DataTypes) {
    const Employee = sequelize.define("Employee", {
        employeeName: DataTypes.STRING,
        wage: DataTypes.DECIMAL(10, 2),
        employeePosition: DataTypes.STRING,
        shift: DataTypes.INTEGER,
        hireDate: DataTypes.DATE,
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
    return Employee;
};
