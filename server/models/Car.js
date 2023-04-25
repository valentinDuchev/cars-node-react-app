const { Schema, model, Types: { ObjectId } } = require('mongoose');


const carSchema = new Schema({

    brand: {
        type: String,
        required: [true, "Brand is required"]
    },
    model: {
        type: String,
    },
    seats: {
        type: Number,
        required: [true, 'Seats is required']
    },
    pricePerDay: {
        type: String,
        required: [true, 'Price is required']
    },
    carClass: {
        type: String,
        required: [true, 'Class is required']
    },
    extras: {
        type: [String]
    }, 
    typeCar: {
        type: String, //Sedan / hatchback and etc
    }, 
    transmission: {
        type: String
    }, 
    doors: {
        type: Number
    }, 
    image: {
        type: String
    }
})


module.exports = model('Car', carSchema)