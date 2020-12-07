
const models = require("../models/burger");

module.exports = (app)=>{
    app.get("*", (req, res)=>{
        console.log("test log")
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

    app.post("/burger/devour", (req, res)=>{
        console.log(req.body.devourId)
        const cb = ()=>{
            res.redirect("/");
        };

        models.devourBurger(req.body.devourId, cb);
    });
}

// tells the model what to do and sends response from the model to the view

// will also handle the routes that urls try to connect with