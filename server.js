const express = require("express");

var app = express();

app.use(express.static("./public"))

require("./controllers/burgers_controller")();