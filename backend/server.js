const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const env = require('dotenv')

require('dotenv').config();

const app = express(); // create express server
const port = process.env.PORT || 3001; // port server is running on

app.use(cors()); // cors middleware
app.use(express.json()); // body parser middleware

const uri = process.env.ATLAS_URI; // database uri
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });// connect to database
const connection = mongoose.connection; // get connection
connection.once('open', () => { // once connection is open
    console.log("MongoDB database connection established successfully"); // log success
})




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});