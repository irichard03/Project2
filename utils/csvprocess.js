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

module.exports = {
    makeColumns: function(ToBeModel, db) {
        const headers = ToBeModel[0];
        for (const property in headers) {
            if (headers.hasOwnProperty(property)) {
                console.log(typeof property);
                if (property === "id") {
                    headers[property] = {
                        type: Sequelize.STRING,
                        primaryKey: true
                    };
                }
            }
        }
        const Test = sequelize.define("test", headers);
        db.Test = Test;
        db.sequelize.sync();
        return headers;
    }
};
