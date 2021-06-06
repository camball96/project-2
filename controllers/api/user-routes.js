const router = require('express').Router();

const { User, Score, Game, Review } = require('../../models');

// CREATE USER 

// body format as per below:
// {
// 	"user_name": "firstuser",
// 	"user_email": "email@email.com",
// 	"password": "passwerd"
// }

router.post('/', async (req, res) => {
    try {
        const addUser = await User.create(req.body)
        res.status(200).json(addUser);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});




module.exports = router;
