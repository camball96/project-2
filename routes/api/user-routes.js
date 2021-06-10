const router = require('express').Router();

const { User, Game, Review } = require('../../models');


// CREATE USER & establish a session for them

router.post('/register', async (req, res) => {
    try {
        const addUser = await User.create(req.body)

        req.session.user_id = addUser.id;
        req.session.user_name = addUser.user_name;
        req.session.loggedIn = true;
        req.session.save();

        res.status(200).json(1);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// LOGIN route.

router.post('/login', async (req, res) => {
    try {
        const verify = await User.findOne({
            where:
            {
                user_name: req.body.user_name
            },
            attributes: { exclude: ['createdAt', 'updatedAt', 'user_email'] }
        })
        if (verify) {

            // double check this...why change to readable???
            const readable = verify.get({ plain: true })
            const verified = verify.checkPassword(req.body.password);

            if (verified) {
                req.session.user_id = readable.id;
                req.session.user_name = readable.user_name;
                req.session.loggedIn = true;
                req.session.save();

                res.status(200).json(1)
                return
            }
            res.json('Username or password is incorrect')
            return
        }
        res.json('Username or password is incorrect')
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



// update user account details:
router.put('/update', async (req, res) => {
    console.log('arrived')

    try {
        const updateAcct = await User.update(req.body, {
            where:
            {
                id: req.session.user_id
            }
        }
        )
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

module.exports = router;

// DELETE user PROFILE
router.delete('/delete/:id', async (req, res) => {
    if (req.session.user_id === req.params.id) {
        try {
            const deleteUser = await User.destroy(req.params.id)

            res.status(200).json(deleteUser)
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
    res.redirect('/login')
})
