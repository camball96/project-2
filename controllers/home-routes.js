
const router = require('express').Router();

const { User, Game, Review } = require('../models');
// const Score = require('../models/score');

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

router.get('/register', (req, res) => {
    let loggedIn;
    req.session.loggedIn
        ? loggedIn = true
        : loggedIn = false

    res.render('register', {
        loggedIn
    });
});

router.get('/login', (req, res) => {

    res.render('login');

});


// game_id: req.body.game_id,
//             user_id: req.session.user_id,
//             review_score: req.body.review_score,
//             review_txt: req.body.review_txt

router.get('/reviews/:id', async (req, res) => {

    try {
        const retrieveReviews = await Game.findByPk(
            req.params.id,
            {
                include: [
                    {
                        model: Review,
                        attributes: ['user_id', 'user_name', 'review_score', 'review_txt']
                    },
                ]
            })

        const allReviews = retrieveReviews.get({ plain: true })

        console.log(allReviews) // remove once ready to submit

        let loggedIn;
        req.session.loggedIn
            ? loggedIn = true
            : loggedIn = false

        res.render('reviewpage', { allReviews, loggedIn });

    }

    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;













