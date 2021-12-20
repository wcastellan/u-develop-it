// import express
const express = require('express');

// PORT designation
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

// default response for amny other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});




// start express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});