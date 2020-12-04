const express = require("express");
const models = require("../models/burger");

const app = express();
const PORT = process.env.PORT || 8080;


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});