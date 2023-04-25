const router = require('express').Router();

const { getAllCars, createCar} = require('../controllers/quizesController');

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


module.exports = router;