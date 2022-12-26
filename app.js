// Import Express 
const express = require('express');


// Initialize Express module
const app = express();

// Routes 
app.get('/', (req, res)=> {
    res.send("Hello, World!");
});

// Listen for requests
app.listen(8080, '0.0.0.0', ()=> {
    console.log("Server is listening on PORT 8080...");
});