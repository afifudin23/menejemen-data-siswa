const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");
const db  = require("./config/mysql");

// include route
const xii_ipa1 = require("./routes/xii_ipa1");

// Using pug template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// connecting route to database
app.use("/xii_ipa1", (req, res, next) => {
  req.db = db;
  next();
});

// parsing body request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// routing
app.use("/xii_ipa1", xii_ipa1);
app.use("/", (req, res) => {
    res.status(404);
    res.send("<h1>404</h1><h1>Page Not Found</h1>");
});

module.exports = app;
