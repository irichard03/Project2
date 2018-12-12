//import datbase models folder for database api calls.
const db = require("../models");
const csvToModel = require("../utils/csvprocess");
const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
    process.env.DBHOST,
    process.env.DBUSER,
    process.env.DBPASS,
    {
        dialect: "mysql"
    }
);
const path = require("path");

module.exports = function(app) {
    //passport route reserved, not implemented
    app.get("/authorize", function(req, res) {
        res.send("passported.");
    });

    //hardcoded route to menu
    app.get("/menu", function(req, res) {
        db.Menu.findAll({}).then(function(data) {
            res.json(data);
        });
    });

    //dynamic query
    app.get("/show/:table", function(req, res) {
        let myTable = req.params.table;
        myTable = myTable.toLowerCase();
        sequelize.query("SELECT * FROM " + myTable + ";").then(function(data) {
            console.log(data);
        });
    });

    //csv file import
    app.post("/csv", function(req, res) {
        /* const headers = */
        res.json(csvToModel.makeColumns(req.body.result, db, req.body.name));
    });

    //insert user
    app.post("/adduser", function(req, res) {
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        }).then(function(data) {
            res.json(data);
        });
    });

    // For anything else, render the html page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../client/build/index.html"));
    });
};
