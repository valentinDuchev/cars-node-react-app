const Car = require("../models/Car");
const Reservation = require("../models/Reservation");

async function getAllCars() {
    const result = await Car.find({});
    return result;
}

async function createCar(data) {
    const result = new Car(data);
    await result.save();

    return result;
}

async function getOnecar (_id) {
    const result = await Car.findOne({_id})
    return result;
}

async function createReservation (data) {

    const result = new Reservation(data)
    await result.save()

    return result;
}

// async function deleteById(id) {
//     await Quiz.findByIdAndDelete(id);
// }


module.exports = {
    getAllCars,
    createCar, 
    getOnecar, 
    createReservation
}