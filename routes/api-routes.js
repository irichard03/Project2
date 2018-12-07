//import datbase modles folder for database api calls.
const db = require("../models");

//import Javascript Web Token (JWT)
//const passport = require("passport-jwt").Stategy, ExtractJwt =require("passport-jwt").ExtractJwt;

module.exports = function(app) {
    const path = require("path");
    app.get("/menu", function(req, res) {
        db.Menu.findAll({}).then(function(data) {
            res.json(data);
        });
    });

    app.get("/employee", function(req, res) {
        db.Employee.findAll({}).then(function(data) {
            res.json(data);
        });
    });

    // For anything else, render the html page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../client/build/index.html"));
    });
};
