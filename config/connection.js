const mysql = require("mysql");
require("dotenv").config();

const dbConfig = {
    connectionLimit: 10,
    host: process.env.dbHost,
    port: 3306,
    user: process.env.dbUser,
    password: process.env.dbPass,
    database: process.env.db
};

let connection;

const reconnect = ()=>{
    connection = mysql.createPool(dbConfig);

};

reconnect();

// connection.on("error", reconnect());

// connection.getConnection();



// const handleDisconnect = ()=> {
//     connection = mysql.createConnection(dbConfig);

//     connection.on("error", (err) =>{
//         console.log("error in db connection", err);
//         if(err.code === "PROTOCOL_CONNECTION_LOST"){
//             handleDisconnect()
//         }else{
//             throw err;
//         }
//     })
// };

// handleDisconnect();

// connection.connect((err)=>{
//     if(err) {
//         setTimeout(handleDisconnect, 2000);
//     };
// });

module.exports = connection;