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



module.exports = router;













