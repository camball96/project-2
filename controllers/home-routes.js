
const router = require('express').Router();

const { User, Game, Review } = require('../models');

// GET 5 games - you can manipulate the returned data as needed in the handlebar page
router.get('/', async (req, res) => {
    try {
        const gameData = await Game.findAll({
            limit: 5,
            include: [
                {
                    model: Review,
                    attributes: ['review_score'],
                }
            ],
        });

        const games = gameData.map((item) =>
            item.get({ plain: true }))

        console.log(games) // remove once ready to submit

        let loggedIn;
        req.session.loggedIn
            ? loggedIn = true
            : loggedIn = false

        res.render('homepage', {
            games,
            loggedIn
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// serve the registration page
router.get('/register', (req, res) => {
    let loggedIn;
    req.session.loggedIn
        ? loggedIn = true
        : loggedIn = false

    res.render('register', {
        loggedIn
    });
});


// serve login page
router.get('/login', (req, res) => {

    res.render('login');

});




// goes to the gameReview view serve a page which has all reviews for a specific game

router.get('/reviews/:id', async (req, res) => {

    try {
        const retrieveReviews = await Game.findByPk(
            req.params.id,
            {
                include: [
                    {
                        model: Review,
                        attributes: ['user_id', 'user_name', 'review_score', 'review_txt', 'created_at']
                    },
                ]
            })

        const allReviews = retrieveReviews.get({ plain: true })

        console.log(allReviews) // remove once ready to submit

        let loggedIn;
        req.session.loggedIn
            ? loggedIn = true
            : loggedIn = false

        res.render('gameReview', { allReviews, loggedIn });

    }

    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// goes to the gameprofile view
router.get('/gameprofile/:id', async (req, res) => {

    try {
        const getGame = await Game.findByPk(
            req.params.id,
            {
                include: [
                    {
                        model: Review,
                        attributes: ['review_score']
                    },
                ]
            })

        const gameInfo = getGame.get({ plain: true })

        console.log(gameInfo) // remove once ready to submit

        let loggedIn;
        req.session.loggedIn
            ? loggedIn = true
            : loggedIn = false

        res.render('gameProfile', { gameInfo, loggedIn });

    }

    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// I have moved this over to the API/Reviews section
// POST review - for adding review
// router.post('/review', async (req, res) => {
//     try {
//         const addReview = await Review.create(req.body)
//         const revID = addReview.id;
//         const addScore = await Score.create({
//             rating: req.body.rating,
//             game_id: req.body.game_id,
//             user_id: req.body.user_id,
//             review_id: revID
//         })
//         res.status(200).json(addScore);
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });



module.exports = router;













