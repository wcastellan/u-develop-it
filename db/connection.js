// connect to MySQL database
const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection({
    
        host: 'localhost',
        // your MySQL username
        user: 'root',
        // your MySQL password
        password: 'chobits22',
        database: 'election'
});

module.exports = db;
