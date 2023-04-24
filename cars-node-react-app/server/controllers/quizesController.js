const Car = require("../models/Car")

async function getAllCars() {
    const result = await Car.find({});
    return result;
}

// async function createCar(data) {
//     const result = new Quiz(data);
//     await result.save();

//     return result;
// }

// async function getOneQuiz (_id) {
//     const result = await Quiz.findOne({_id})
//     return result;
// }

// async function deleteById(id) {
//     await Quiz.findByIdAndDelete(id);
// }


module.exports = {
    getAllCars,
    
}