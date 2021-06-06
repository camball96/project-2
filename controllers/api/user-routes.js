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

// pseudo code for updating user details, need to link to frontend update button
router.put('/:id', async (req, res) => {
    const userData = await User.update(
		{
			user_name: req.body.user_name,
            user_email: req.body.user_email,
            password: req.body.password
		},
		{
			where: {
				id: req.params.id,
			},
		}
	);
  return res.status(200).json(userData);
})


module.exports = router;
