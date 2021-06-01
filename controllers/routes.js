const router = require('express').Router();
const { User, Game, Review } = require('../models');
const Score = require('../models/score');


// Routes needed....
// get all
// get one - for when user clicks one
// post - new game
// post - to submit a review to the db
// update and delete


// GET some games reviews from homepage
router.get('/', async (req, res) => {
    try {
        const gameData = await Game.findAll({
            include: [
                {
                    model: 'review',
                    attributes: ['review_txt', 'user_id'],
                },
            ],
        });

        const games = gameData.map((game) =>
            games.get({ plain: true })
        );

        res.render('homepage', {
            games,
        });
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































// GET one gallery
router.get('/gallery/:id', async (req, res) => {
    try {
        const dbGalleryData = await Gallery.findByPk(req.params.id, {
            include: [
                {
                    model: Painting,
                    attributes: [
                        'id',
                        'title',
                        'artist',
                        'exhibition_date',
                        'filename',
                        'description',
                    ],
                },
            ],
        });

        const gallery = dbGalleryData.get({ plain: true });
        res.render('gallery', { gallery });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// GET one painting
router.get('/painting/:id', async (req, res) => {
    try {
        const dbPaintingData = await Painting.findByPk(req.params.id);

        const painting = dbPaintingData.get({ plain: true });

        res.render('painting', { painting });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
