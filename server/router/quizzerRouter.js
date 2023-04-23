const router = require('express').Router();

const { getAllCars} = require('../controllers/quizesController');

router.get('/allCars', async (req, res) => {
    const result = await getAllCars();

    res.status(200).json({ result, message: 'success' })
})

router.post('/createCar', async (req, res) => {
    // try {


    //     const token = req.headers['token'];

    //     if (!token) {
    //         throw new Error('You have to log in to create recipe.')
    //     }


    //     const userData = parseJwt(token);
    //     const user = await getUserByEmail(userData.email);



    //     const data = {
    //         title: req.body.title,
    //         description: req.body.description,
    //         topic: req.body.topic,
    //         difficulty: req.body.difficulty,
    //         questions: req.body.questions,
    //         author: user._id,
    //         authorEmail: user.email
    //     };




    //     // console.log(req.headers)

    //     const result = await createQuiz(data);



    //     for (let followerId of user.followers) {
    //         if (followerId) {
    //             console.log(followerId)
    //             const follower = await getUserById(followerId)
    //             console.log(follower)
    //             follower.newsFeed.push(result)
    //             console.log(follower.newsFeed)
    //             await follower.save()
    //         }

    //     }

    //     user.quizesCreated.push(result)
    //     user.rating += 1;
    //     await user.save()

    //     res.status(201).json({ message: 'Quiz created successfully' });
    // } catch (err) {
    //     res.json({ message: err.message })
    //     console.log(err)
    // }

});


module.exports = router;