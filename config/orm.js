const connection = require("./connection");

exports.selectAll = (table, cb)=>{

    console.log("query has started")
    connection.query("SELECT * FROM ??", [table], (err, results)=>{
        if(err) throw err;
        console.log(results);
        cb(results);
    }); 

};

exports.insertOne = (table, col, value, cb)=>{
    console.log (value)
    connection.query("INSERT INTO ?? (??) VALUES (?)", [table, col, value], (err, results)=>{
        if(err) throw err;
        console.log("insert results", results);
        cb();
    });
};

exports.updateOne = (table, col, changeValueTo, id, cb)=>{
    connection.query("UPDATE ?? SET ??=?? WHERE id=?", [table, col, changeValueTo, id], (err, results)=>{
        console.log(results);
        cb();
    });
};
