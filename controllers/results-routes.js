const router = require('express').Router();

const { User, Score, Game, Review } = require('../models');
// const Score = require('../models/score');

//updated
// Routes needed....
// get all
// get one - for when user clicks one
// post - new user
// post - new game
// post - to submit a review to the db
// update and delete routes.


// GET a single game from the page
// We need handling on the handlebars for if no result retuned - in that case we can say 'game not exist, want to add it???' etc. 
router.get('/:name', async (req, res) => {
    try {
        const singleGameData = await Game.findOne({
            where: {
                game_name: req.params.name
            }
            ,
            include: [
                {
                    model: 'review',
                    attributes: ['review_txt', 'user_id', 'review_score'],
                },
            ],
        });

        const singleGame = singleGameData.get({ plain: true })


        // waiting for handlebars page name 
        res.json(singleGameData)
        // res.render('homepage', {
        //     singleGame,
        // });
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
