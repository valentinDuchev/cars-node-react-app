const router = require('express').Router();

const { getAllCars, createCar, getOnecar, createReservation } = require('../controllers/quizesController');

router.get('/allCars', async (req, res) => {
    const result = await getAllCars();

    res.status(200).json({ result, message: 'success' })
})

router.post('/createCar', async (req, res) => {
    try {
        const data = {
            brand: req.body.brand,
            model: req.body.model,
            seats: req.body.seats,
            pricePerDay: req.body.pricePerDay,
            carClass: req.body.carClass,
            extras: req.body.extras,
            typeCar: req.body.typeCar,
            transmission: req.body.transmission,
            doors: req.body.doors,
            image: req.body.image,
        };

        // console.log(req.headers)

        const result = await createCar(data);
        res.status(201).json({ message: 'Quiz created successfully', result });
    } catch (err) {
        res.json({ message: err.message })
        console.log(err)
    }

});

router.get('/car/:id', async (req, res) => {
    const result = await getOnecar(req.params.id);

    res.status(200).json({ result, message: 'success' })
})

router.post('/reservation', async (req, res) => {
    try {
        const data = {
            carId: req.body.carId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            number: req.body.number,
            age: req.body.age,
            pickupDate: req.body.pickupDate,
            dropOffDate: req.body.dropOffDate,
            price: req.body.price,
            days: req.body.days
        };

        // console.log(req.headers)

        const result = await createReservation(data);
        res.status(201).json({ message: 'Reservation created successfully', result });
    } catch (err) {
        res.json({ message: err.message })
        console.log(err)
    }
})


module.exports = router;