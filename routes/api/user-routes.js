const router = require("express").Router();

const { User, Game, Review } = require("../../models");
const { bulkCreate } = require('../../models/game');

// Create account & establish a session
router.post('/register', async (req, res) => {
    try {
        const addUser = await User.create(req.body)
        req.session.user_id = addUser.id;
        req.session.user_name = addUser.user_name;
        req.session.loggedIn = true;
        req.session.save();
        res.redirect(`/`)
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// LOGIN route.
router.post('/login', async (req, res) => {
    try {
        const userAcct = await User.findOne({
            where:
            {
                user_name: req.body.user_name
            },
            attributes:
            {
                exclude: ['createdAt', 'updatedAt', 'user_email']
            }
        })

        if (!userAcct) {
            //failed username check
            res.status(500).json('Username or password incorrect');
            return
        }

        // get plain data and check the password
        const readable = userAcct.get({ plain: true })
        const verified = userAcct.checkPassword(req.body.password);

        if (!verified) {
            // failed password check
            res.status(500).json('Username or password incorrect')
            return
        }

        // Successful path, save session 
        req.session.user_id = readable.id;
        req.session.user_name = readable.user_name;
        req.session.loggedIn = true;
        req.session.save();

        res.status(200).json(1)
    }
    catch (err) {
        console.log(err);
        res.status(500).json('Unknown Error - pls email us with username and timestamp');
    }
});



// update username or email details. 
router.put('/update', async (req, res) => {
    try {
        const updateAcct = await User.update(req.body, {
            where:
            {
                id: req.session.user_id
            }
        })
        res.status(200).json(1)
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// update password -retreive user then hash and save the new password.
router.put('/update/pw', async (req, res) => {
    try {
        const findAcct = await User.findByPk(req.session.user_id)
        const newPW = await findAcct.hashBeforeUpdate(req.body.password)

        await User.update(
            {
                password: newPW
            },
            {
                where: {
                    id: req.session.user_id
                },
            })
        res.status(200).json(1)
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// LOG OUT 
router.delete('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(200).end();
        });
    } else {
        res.status(420).end();
    }
});


// DELETE user PROFILE
// First re-assigns their reviews to 'Deleted User'
router.delete('/delete', async (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/login')
    }
    try {
        const findDependencies = await Review.findAll({
            where: {
                user_id: req.session.user_id
            }
        })
        const reviews = findDependencies.map(item => item.get({ plain: true }))
        const updateReviews = reviews.map(item => {
            item.user_id = 1
            item.user_name = 'Deleted Account'
            return item
        })

        await Review.bulkCreate(updateReviews,
            { updateOnDuplicate: ["id", "user_id", "user_name"] })
        await User.destroy({
            where: { id: req.session.user_id }
        })
        req.session.destroy()

        res.redirect('/')
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;
