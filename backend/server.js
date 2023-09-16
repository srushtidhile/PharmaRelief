const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// allows to have environment variables in dotenv file
require('dotenv').config();

// setting up our express server
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
// required for parsing json
app.use(express.json());

// connecting to database
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
})

// starting the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});