const express = require("express");
const models = require("../models/burger");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

        const cb = ()=>{
            res.redirect("/");
        };

        models.addBurger(req.body.burgName, cb)
    });

    app.post("/burger/devour:id", (req, res)=>{
        console.log(req.params.id)
        const cb = ()=>{
            res.redirect("/");
        };

        models.devourBurger(req.params.id, cb);
    });
}

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});




// tells the model what to do and sends response from the model to the view

// will also handle the routes that urls try to connect with