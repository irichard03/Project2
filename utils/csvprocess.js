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
    makeColumns: function(ToBeModel, db) {
        const headers = ToBeModel[0];
        let propList = "";
        let counter = 0;
        for (const property in headers) {
            if (headers.hasOwnProperty(property)) {
                counter++;
                if (property === "id") {
                    headers[property] = {
                        type: Sequelize.INTEGER,
                        primaryKey: true
                    };
                    propList += property + " INT PRIMARY KEY, ";
                } else {
                    if (counter === Object.keys(headers).length) {
                        propList += property + " VARCHAR(50)";
                    } else {
                        propList += property + " VARCHAR(50), ";
                    }
                    headers[property] = Sequelize.STRING;
                }
            }
        }
        const query = `DROP TABLE IF EXISTS test; CREATE TABLE test(${propList});`;
        console.log("HEre are headers: ");
        console.log(headers);
        queryInterface
            .createTable("test", headers)
            // eslint-disable-next-line prettier/prettier
            .then((args) => console.log("HI" + args));
        // sequelize.query(query).spread((results, metadata) => {
        //     console.log("OH HI THERE");
        //     // Results will be an empty array and metadata will contain the number of affected rows.
        // });
        // const Test = sequelize.define("test", headers);
        // db.Test = Test;
        // db.sequelize.sync();
        return headers;
    }
};
