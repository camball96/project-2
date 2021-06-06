const router = require('express').Router();

const { User, Score, Game, Review } = require('../models');
// const Score = require('../models/score');

// GET ALL Games - you can manipulate the returned data as needed in the handlebar page
router.get('/', async (req, res) => {
    try {
        const gameData = await Game.findAll({
            include: [
                {
                    model: 'review',
                    attributes: ['review_txt', 'user_id'],
                },
                {
                    model: 'score',
                    attributes: ['game_id', 'rating'],
                }
            ],
        });

        const games = gameData.map((game) =>
            games.get({ plain: true })
        );

        console.log(games)
        //remove below line when we have page name
        res.json(gameData)

        // waiting for handlebars page name...
        // res.render('homepage', {
        //     games,
        // });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one game - for when user drills down on a single game
router.get('/:id', async (req, res) => {
    try {
        const single_game = await Game.findOne(
            {
                where: {
                    id: req.params.id
                },

                include: [
                    {
                        model: 'review',
                        attributes: ['review_txt', 'description'],
                    },
                    {
                        model: 'score',
                        attributes: ['rating'],
                    },
                ],
            });

        const single_game_data = single_game.map((game) =>
            game.get({ plain: true })
        );

        res.render('homepage', {
            single_game_data,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// POST game - for adding game
router.post('/new', async (req, res) => {
    try {
        const addGame = await Game.create(req.body)
        res.status(200).json(addGame);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// POST review - for adding review
router.post('/review', async (req, res) => {
    try {
        const addReview = await Review.create(req.body)
        const revID = addReview.id;
        const addScore = await Score.create({
            rating: req.body.rating,
            game_id: req.body.game_id,
            user_id: req.body.user_id,
            review_id: revID
        })
        res.status(200).json(addScore);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;













