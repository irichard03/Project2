// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const passport = require("passport");
const session = require("express-session");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
//if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
//}
// Routes
// =============================================================
require("./routes/api-routes.js")(app);
//Authentication
//==============================================================
app.use(
    session({ secret: "gizmo cloud", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
