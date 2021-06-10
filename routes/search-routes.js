const router = require('express').Router();
const { User, Game, Review } = require('../models');

const Sequelize = require('sequelize');
const Op = Sequelize.Op


// search for results similar to what user types into the search field

router.get('/:game', async (req, res) => {
    try {

        const gameSearch = await Game.findAll({

            where: {
                game_name: { [Op.like]: `%${req.params.game}%` }
            },

            include: [
                {
                    model: Review,
                    attributes: ['user_id', 'user_name', 'review_score', 'review_txt', 'created_at'],
                }
            ],
        });

        const searchResult = gameSearch.map((item) => item.get({ plain: true }));

        let loggedIn = req.session.loggedIn
        let user_name = req.session.user_name

        return res.render('searchResults', {
            searchResult, loggedIn, user_name
        })

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;
