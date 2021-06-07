const router = require('express').Router();

const { User, Game, Review } = require('../../models');


// CREATE USER 
// expects a POST request with body format as per below::
// {
// 	"user_name": "firstuser",
// 	"user_email": "email@email.com",
// 	"password": "passwerd"
// }
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


// LOGIN route
// expects a POST request with body format as per below:
// {
// 	"user_name": "firstuser",
// 	"password": "passwerd"
// }
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
        return
    }

    res.json(2)
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
