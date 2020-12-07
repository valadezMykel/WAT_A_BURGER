const connection = require("./connection");

exports.selectAll = (table, cb)=>{
    connection.query("SELECT * FROM ??", [table], (err, results)=>{
        cb(results);
    }); 

};

exports.insertOne = (table, col, value, cb)=>{
    console.log (value)
    connection.query("INSERT INTO ?? (??) VALUES (?)", [table, col, value], (err, results)=>{
        cb();
    });
};

exports.updateOne = (table, col, changeValueTo, id, cb)=>{
    connection.query("UPDATE ?? SET ??=? WHERE id=?", [table, col, changeValueTo, id], (err, results)=>{
        cb();
    });
};
