const orm = require("../config/orm");

exports.getAllBurgers = (cb)=>{
    orm.selectAll("burgers", cb);
};

exports.addBurger = (burgerName, cb)=>{
    orm.insertOne("burgers", "burger_name", burgerName, cb);
}

exports.devourBurger = (burgerId, cb)=>{
    orm.updateOne("burgers", "devoured", 1, burgerId, cb);
}