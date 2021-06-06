const router = require('express').Router();

const gameRoutes = require('./game-routes');
const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');

//updated
router.use('/game', gameRoutes);
router.use('/user', userRoutes);
router.use('/review', reviewRoutes);

module.exports = router;
