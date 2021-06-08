const router = require('express').Router();
const { User, Game, Review } = require('../../models');


// POST game - for adding new game.
// JSON data body format expected:
// {
// 	"game_name": "newgame",
//  "game_desc": "description"
// 	"picture": "picplaceholder"
// }
router.post('/new', async (req, res) => {
    if (req.session.loggedIn) {

        try {
            const addGame = await Game.create(req.body)

            res.status(200).json(addGame);
            // where should user be redirected to after adding game?
        }

        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});



// search for a single game

router.get('/search/:game', async (req, res) => {
    try {
        console.log('ok')
        const gameSearch = await Game.findOne({
            where:
            {
                game_name: req.params.game
            },

            include: [
                {
                    model: Review,
                    attributes: ['user_id', 'user_name', 'review_score', 'review_txt', 'created_at'],
                }
            ],
        });

        const searchResult = gameSearch.get({ plain: true })

        console.log(searchResult) // remove once ready to submit

        // let loggedIn;
        // req.session.loggedIn
        //     ? loggedIn = true
        //     : loggedIn = false

        return res.redirect(`/results/${searchResult.id}`)
        // return

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;













