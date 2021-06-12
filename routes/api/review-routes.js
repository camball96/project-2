const router = require("express").Router();

const { User, Game, Review } = require("../../models");

router.post('/add', async (req, res) => {
	req.body.user_name = req.session.user_name
	req.body.user_id = req.session.user_id
	try {
		const addReview = await Review.create(req.body)
		return res.status(200).json(addReview);
	}
	catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
})


module.exports = router;
