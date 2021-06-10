const router = require('express').Router();
const { User, Game, Review } = require('../models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op


// search for results similar to what user types into the search field

// GET ALL games 
router.get("/games", async (req, res) => {
    try {
        const gameData = await Game.findAll({
            include: [
                {
                    model: Review,
                    attributes: ["review_score"],
                },
            ],


        }
        );

        const allGames = gameData.map((item) => item.get({ plain: true }));

        console.log(allGames); // remove once ready to submit


        let loggedIn = req.session.loggedIn
        let user_name = req.session.user_name

        res.render("viewAllGames", {
            allGames,
            loggedIn,
            user_name
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});






module.exports = router;
