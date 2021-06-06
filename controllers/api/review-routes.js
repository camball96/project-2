const router = require('express').Router();

const { User, Game, Review } = require('../../models');
// const Score = require('../models/score');


// POST review - for adding review
// Expects a POST request with body format as below::
// {
// 	"game_id": (selected game's ID),
// 	"user_id": (logged in user's ID) - req.session.,
// 	"review_score": 4,
// 	"review_txt": "review written by user"
// }
router.post('/review', async (req, res) => {
    if (req.session.loggedIn) {
        try {
            const addReview = await Review.create(req.body)

            res.status(200).json(addReview);
            // where to redirect user after completing this?
        }

        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }

        return
    }

    res.redirect('/login')
})




module.exports = router;
