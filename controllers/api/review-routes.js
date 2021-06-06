const router = require('express').Router();

const { User, Game, Review } = require('../../models');
// const Score = require('../models/score');


// POST review - for adding review
// Expects a POST request with body format as below:
// {
// 	"game_id": (selected game's ID),
// 	"user_id": (logged in user's ID) - req.session.,
// 	"review_score": 4,
// 	"review_txt": "review written by user"
// }
router.post('/review', async (req, res) => {
    try {
        const addReview = await Review.create({
            game_id: req.body.game_id,
            user_id: req.session.user_id,
            review_score: req.body.review_score,
            review_txt: req.body.review_txt
        })

        res.status(200).json(addReview);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;
