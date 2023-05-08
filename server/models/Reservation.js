const { Schema, model, Types: { ObjectId } } = require('mongoose');
const Car = require('./Car');


const reservationSchema = new Schema({

    carId: {
        type: ObjectId, ref: 'Car',
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
        required: [true, 'Seats is required']
    },
    pickupDate: {
        type: Date,
        required: [true, 'Price is required']
    },
    dropOffDate: {
        type: Date,
        required: [true, 'Class is required']
    },
    price: {
        type: Number
    }, 
    number: {
        type: Number, //Sedan / hatchback and etc
    }, 
    age: {
        type: Number
    }, 
})


module.exports = model('Reservation', reservationSchema)