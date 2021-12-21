// import express
const express = require('express');
const db = require('./db/connection');
// add near top of file 
const apiRoutes = require('./routes/apiRoutes');

// PORT designation
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// add after express middleware
app.use('/api', apiRoutes);

// default response for amny other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// start server after db connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});