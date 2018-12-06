//import datbase modles folder for database api calls.
// const db = require("../models");

//import Javascript Web Token (JWT)
// const passport = require("passport-jwt").Stategy, ExtractJwt =require("passport-jwt").ExtractJwt;
const path = require("path");

module.exports = function(app) {
    // For anything else, render the html page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../client/build/index.html"));
    });

};
