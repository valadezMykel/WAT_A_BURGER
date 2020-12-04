const connection = require("./connection");

exports.selectAll = (cb)=>{

    console.log("query has started")
    connection.query("SELECT * FROM burgers", (err, results)=>{
        if(err) throw err;
        console.log(results);
        cb(results);
    }); 

};

exports.insertONe = (burgerName)=>{
    connection.query("INSERT INTO burger (name) VALUES (?)", [burgerName], (err, results)=>{

    });
};

exports.updateOne = (burgerId)=>{
    connection.query("UPDATE burgers SET devoured=true WHERE id=?", [burgerId], (err, results)=>{

    })
};
