
const router = require('express').Router();

const { User, Game, Review } = require('../models');

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

        console.log(games) // remove once ready to submit

        let loggedIn;
        req.session.loggedIn
            ? loggedIn = true
            : loggedIn = false

        res.render('homepage', {
            games,
            loggedIn
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// search for a single game
// router.get('/search/:game', async (req, res) => {
//     try {
//         console.log('ok')
//         const gameSearch = await Game.findOne({
//             where:
//             {
//                 game_name: req.params.game
//             },

//             include: [
//                 {
//                     model: Review,
//                     attributes: ['user_id', 'user_name', 'review_score', 'review_txt', 'created_at'],
//                 }
//             ],
//         });

//         const searchResult = gameSearch.get({ plain: true })

//         console.log(searchResult) // remove once ready to submit

//         let loggedIn;
//         req.session.loggedIn
//             ? loggedIn = true
//             : loggedIn = false

//         res.render('testsearch', {
//             searchResult,
//             loggedIn
//         });

//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });


// serve the registration page
router.get('/register', (req, res) => {
    let loggedIn;
    req.session.loggedIn
        ? loggedIn = true
        : loggedIn = false

    res.render('register', {
        loggedIn
    });
});


// serve login page
router.get('/login', (req, res) => {

    res.render('login');

});

// get data and serve the PROFILE page
router.get('/profile', async (req, res) => {
    if (req.session.loggedIn) {
        try {
            const getProfile = await User.findOne({
                where:
                {
                    id: req.session.user_id
                },
                attributes: { exclude: ['password'] }
            })

            const profile = getProfile.get({ plain: true })
            let loggedIn = true;

            res.render('userProfile', { profile, loggedIn });

        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
        return
    }
    res.redirect('/login')

});



// goes to the gameprofile view
router.get('/gameprofile/:id', async (req, res) => {

    try {
        const getGame = await Game.findByPk(
            req.params.id,
            {
                include: [
                    {
                        model: Review,
                        attributes: ['user_id', 'user_name', 'review_score', 'review_txt', 'created_at']
                    },
                ]
            })

        const gameInfo = getGame.get({ plain: true })

        console.log(gameInfo) // remove once ready to submit

        let loggedIn;
        req.session.loggedIn
            ? loggedIn = true
            : loggedIn = false

        res.render('gameProfile', { gameInfo, loggedIn });

    }

    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;













