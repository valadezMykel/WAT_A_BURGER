const express = require("express");
const models = require("../models/burger");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

module.exports = ()=>{
    app.get("/", (req, res)=>{
        const cb = (burgerInfo)=>{
            res.render("index", {burgerInfo: burgerInfo});
        }
        models.getAllBurgers(cb);
    });

    app.post("/burger/new", (req, res)=>{
        console.log("post route started")
        console.log(req.body.burgName);
        console.log(req.body);
    });

    app.put("/burger/devour:id", (req, res)=>{

    });
}

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});




// tells the model what to do and sends response from the model to the view

// will also handle the routes that urls try to connect with