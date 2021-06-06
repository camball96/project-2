const router = require('express').Router();
const { User, Game, Review } = require('../../models');




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
                        model: Review,
                        attributes: ['review_txt', 'user_id', 'review_score'],
                    }
                ],
            });

        const single_game_data = single_game.get({ plain: true })
        // the handlebars object is called 'single_game_data')
        console.log(single_game_data)

        let loggedIn;
        req.session.loggedIn
            ? loggedIn = true
            : loggedIn = false

        res.render('search', {
            single_game_data, loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// POST game - for adding new game
// JSON data body format expected:
// {
// 	"game_name": "newgame",
// 	"picture": "picplaceholder"
// }
router.post('/new', async (req, res) => {
    if (req.session.loggedIn) {

        try {
            const addGame = await Game.create(req.body)
            res.status(200).json(addGame);
        }

        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});


// ---this may not be needed... GET 5 games, for the homepage -
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



module.exports = router;













