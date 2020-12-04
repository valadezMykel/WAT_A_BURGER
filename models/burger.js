const orm = require("../config/orm");

// function that use the orm go here
// router here? routes?

// this talks to the database

exports.getAllBurgers = (cb)=>{
    orm.selectAll(cb);
}

// module.export = something?