//import datbase modles folder for database api calls.
const db = require("../models");

module.exports = function(app) {
    //passport route
    app.get("/authorize", function(req, res) {
        res.send("passported.");
    });

    //hardcoded route to menu
    const path = require("path");
<<<<<<< HEAD
    app.get("/table", function(req, res) {
        db.Menu.findAll({}).then(function(data) {
=======
    app.get("/menu", function(req, res) {
        db.Menu.findAll({}).then(function(data) {
            res.json(data);
        });
    });

    //hardcoded route to employee
    app.get("/employee", function(req, res) {
        db.Employee.findAll({}).then(function(data) {
            res.json(data);
        });
    });

    //insert user
    app.post("/adduser", function(req, res) {
        db.User.create(req.body, {
            fields: [" firstName", "lastName", "userName", "email", "password"]
        }).then(function(data) {
>>>>>>> development
            res.json(data);
        });
    });

    // For anything else, render the html page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../client/build/index.html"));
    });
};
