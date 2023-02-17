const mysql = require('mysql');
require('dotenv').config();

let connection = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.NAME
});

connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
})

module.exports = connection;