
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


        console.log(games)
        // res.json(gameData)
        res.render('homepage', {
            games
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/login', (req, res) => {
    // if (req.session.loggedIn) {
    //     res.redirect('/');
    //     return;
    // }
    res.render('login');
});

module.exports = router;













