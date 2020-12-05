const connection = require("./connection");

exports.selectAll = (cb)=>{

    console.log("query has started")
    connection.query("SELECT * FROM burgers", (err, results)=>{
        if(err) throw err;
        console.log(results);
        cb(results);
    }); 

};

exports.insertOne = (burgerName, cb)=>{
    console.log(burgerName)
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [burgerName], (err, results)=>{
        if(err) throw err;
        console.log("insert results", results);
        cb();
    });
};

exports.updateOne = (burgerId, cb)=>{
    connection.query("UPDATE burgers SET devoured=true WHERE id=?", [burgerId], (err, results)=>{
        console.log(results);
        cb();
    });
};
