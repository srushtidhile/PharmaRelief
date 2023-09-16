const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// allows to have environment variables in dotenv file
require('dotenv').config();

// setting up our express server
const app = express();
const port = process.env.PORT || 4000;

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

// page routes load model
const usersRouter = require('./routes/users');

app.use('/users', usersRouter)

app.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });

// starting the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
