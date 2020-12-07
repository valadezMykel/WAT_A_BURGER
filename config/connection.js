const mysql = require("mysql");
require("dotenv").config();

const connection = mysql.createPool(process.env.JAWSDB_URL);

module.exports = connection;