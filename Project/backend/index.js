const express = require('express');
const connectDB = require('./dbconnection/dbconnect');
const app = express();
const port = 8000;
const controller = require('./router/Pracroutes');

app.use(express.json());

connectDB();

app.use('/controller',controller);

app.listen(port , () => {
    console.log(`App running on port ${port}`);
})
