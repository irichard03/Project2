module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        firstName: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        lastName: {
            type: DataTypes.STRING,
            notEmpty: true
        },

        userName: {
            type: DataTypes.TEXT
        },

        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        lastLogin: {
            type: DataTypes.DATE
        },

        status: {
            type: DataTypes.ENUM("active", "inactive"),
            defaultValue: "active"
        }
    });

    return User;
};
