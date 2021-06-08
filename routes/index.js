const router = require('express').Router();

const gameRoutes = require('./api/game-routes');
const userRoutes = require('./api/user-routes');
const reviewRoutes = require('./api/review-routes');

//updated..
router.use('/game', gameRoutes);
router.use('/user', userRoutes);
router.use('/review', reviewRoutes);

module.exports = router;
