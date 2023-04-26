const mongoose = require('mongoose');
require('../models/Car');

//TODO - change database name
const dbName = 'cars-rental';

const connectionString = `mongodb+srv://valentinduchev:cska1948@cars-rental.pju0oa5.mongodb.net/test`;

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });

        console.log('Database connected');

        mongoose.connection.on('error', (err) => {
            console.error('Database error');
            console.error(err);
        });
    } catch (err) {
        console.error('Error connecting to database');
        process.exit(1);
    }
}