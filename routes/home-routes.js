const router = require("express").Router();

const { User, Game, Review } = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op


// serve the registration page
router.get("/register", (req, res) => {
	let loggedIn = req.session.loggedIn
	res.render("register", {
		loggedIn,
	});
});

// serve login page
router.get("/login", (req, res) => {
	let loggedIn = req.session.loggedIn
	res.render("login", {
		loggedIn,
	});
});

// Get aboutUs page
router.get("/aboutUs", (req, res) => {
	let loggedIn = req.session.loggedIn
	let user_name = req.session.user_name
	res.render("aboutUs", {
		loggedIn,
		user_name
	});
});

// GET 5 games when arriving at landing page
router.get("/", async (req, res) => {
	try {
		const gameData = await Game.findAll({
			include: [
				{
					model: Review,
					attributes: ["review_score"],
				},
			],
			order: Sequelize.literal('rand()'),
			limit: 5
		}
		);

		const games = gameData.map((item) => item.get({ plain: true }));

		let landingPage = true
		let loggedIn = req.session.loggedIn
		let user_name = req.session.user_name

		res.render("homepage", {
			games,
			loggedIn,
			user_name,
			landingPage
		});

	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// get data and serve the user PROFILE page
router.get("/profile", async (req, res) => {
	if (!req.session.loggedIn) {
		return res.redirect("/login")
	}

	try {
		const getProfile = await User.findOne({
			where: {
				id: req.session.user_id,
			},
			attributes: {
				exclude: ["password"]
			},
		});

		const profile = getProfile.get({ plain: true });
		let loggedIn = req.session.loggedIn
		let user_name = req.session.user_name

		return res.render("userProfile", {
			profile,
			loggedIn,
			user_name
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});

// Get the game and its reviews
router.get("/gameprofile/:id", async (req, res) => {
	try {
		const getGame = await Game.findByPk(req.params.id, {
			include: [
				{
					model: Review,
					attributes: [
						"user_name",
						"review_score",
						"review_txt",
						"created_at",
					],
				},
			],
		});

		const gameInfo = getGame.get({ plain: true });

		let loggedIn = req.session.loggedIn
		let user_name = req.session.user_name

		return res.render("gameProfile", {
			gameInfo,
			loggedIn,
			user_name
		});
	}
	catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// serve the new game review page
router.get("/create/newgame", (req, res) => {
	let loggedIn = req.session.loggedIn
	let user_name = req.session.user_name
	res.render("reviewnewgame", {
		loggedIn,
		user_name
	})
})



module.exports = router;
