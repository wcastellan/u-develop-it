// import express
const express = require('express');

// PORT designation
const PORT = process.env.PORT || 3001;
const app = express();

// connect to MySQL database
const mysql = require('mysql2');

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your MySQL username
        user: 'root',
        // your MySQL password
        password: 'L@p1z123',
        database: 'election'
    },
    console.log('Connected to the election database.')
);





db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// default response for amny other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// start express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});