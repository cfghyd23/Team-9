const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

require('dotenv').config();

const app = express(); // create express server
const port = process.env.PORT || 5000; // port server is running on

app.use(cors()); // cors middleware
app.use(express.json()); // body parser middleware

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});