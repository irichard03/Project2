//import datbase modles folder for database api calls.
// const db = require("../models");

//import Javascript Web Token (JWT)
// const passport = require("passport-jwt").Stategy, ExtractJwt =require("passport-jwt").ExtractJwt;

module.exports = function(app) {
    const path = require("path");
    // For anything else, render the html page
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../client/build/index.html"));
    });

    //
    /** router.post('/profile', passport.authenticate('jwt', { session: false }),function(req, res) {
        res.send(req.user.profile);
        }
    );
    */
};
