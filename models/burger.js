const orm = require("../config/orm");

// function that use the orm go here
// router here? routes?

// this talks to the database

exports.getAllBurgers = (cb)=>{
    orm.selectAll("burgers", cb);
};

exports.addBurger = (burgerName, cb)=>{
    orm.insertOne("burgers", "burger_name", burgerName, cb);
}

exports.devourBurger = (burgerId, cb)=>{
    orm.updateOne("burger", "devoured", "true", burgerId, cb);
}
// module.export = something?