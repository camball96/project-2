const router = require('express').Router();
const { User, Game, Review } = require('../../models');



// POST game - for adding new game.
// JSON data body format expected:
// {
// 	"game_name": "newgame",
//  "game_desc": "description"
// 	"picture": "picplaceholder"
//  "review"
// }
router.post('/new', async (req, res) => {

    try {
        const addGame = await Game.create(req.body.game)


        const newGame = addGame.get({ plain: true })

        console.log(newGame)

        const addReview = await Review.create({
            review_txt: req.body.review_txt,
            review_score: req.body.review_score,
            user_name: req.session.user_name,
            user_id: req.session.user_id,
            game_id: newGame.id

        })

        const newReview = addReview.get({ plain: true })

        console.log(newReview)

        res.redirect(`/gameProfile/${newReview.game_id}`)

    }

    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});



module.exports = router;













