const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/amzad';

const dbconnect = async () => {
    try {
        const conn = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`MongoDB connection error: ${err}`);
        process.exit(1); // Exit process with failure
    }
};

module.exports = dbconnect;
