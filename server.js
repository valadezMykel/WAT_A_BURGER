const express = require("express");
// var exphbs = require("express-handlebars");

var app = express();

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// this will bring it all together??

require("./controllers/burgers_controller")();