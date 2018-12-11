/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
//require sequelize
//function for csv and function to take first row and make columns and function to generate new model all in object to export
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(
        config.database,
        config.username,
        config.password,
        config
    );
}
const queryInterface = sequelize.getQueryInterface();

module.exports = {
    makeColumns: function(ToBeModel, db, tableName) {
        const vals = ToBeModel;
        const headers = Object.assign({}, ToBeModel[0]);
        for (const property in headers) {
            if (headers.hasOwnProperty(property)) {
                if (property === "id") {
                    headers[property] = {
                        type: Sequelize.INTEGER,
                        primaryKey: true
                    };
                } else {
                    headers[property] = Sequelize.STRING;
                }
            }
        }
        console.log("Here are headers?: ");
        const today = new Date();
        headers.createdAt = {
            type: Sequelize.DATE
        };
        headers.updatedAt = {
            type: Sequelize.DATE
        };
        console.log(headers);
        vals.forEach((obj) => {
            obj.createdAt = today;
            obj.updatedAt = today;
        });
        console.log("Here are vals?: ");
        console.log(vals);
        queryInterface.createTable(tableName, headers).then((args) =>
            queryInterface
                .bulkInsert(tableName, vals.splice(0, vals.length - 1))
                // eslint-disable-next-line prettier/prettier
                .then((res) => {
                    db[tableName] = sequelize.define(tableName, headers);
                    db.sequelize.sync();
                })
        );
    }
};
