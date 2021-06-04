const router = require('express').Router();

const { User, Game, Review } = require('../../models');

// CREATE USER 

// body format as per below:
// {
// 	"user_name": "firstuser",
// 	"user_email": "email@email.com",
// 	"password": "passwerd"
// }

router.post('/register', async (req, res) => {
    try {
        const addUser = await User.create(req.body)
        res.status(200).json(addUser);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// login
router.post('/login', async (req, res) => {
    try {
        const verify = await User.findOne({
            where:
            {
                user_name: req.body.user_name
            }
        })
        if (verify) {
            const verified = verify.password === req.body.password;
            if (verified) {
                req.session.save(() => {
                    req.session.user_id = verify.id;
                    req.session.username = verify.username;
                    req.session.loggedIn = true;
                    res.json(1)
                })
                return
            }
            res.json('Log in failed, wrong password')
            return
        }
        res.json('Username does not exist')
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



module.exports = router;
