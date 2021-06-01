const router = require('express').Router();
const gameRoutes = require('./api/game-routes');
const userRoutes = require('./api/user-routes');
const reviewRoutes = require('./api/review-routes');
const scoreRoutes = require('./api/score-routes');


router.use('/game', gameRoutes);
router.use('/user', userRoutes);
router.use('/review', reviewRoutes);
router.use('/score', scoreRoutes);

module.exports = router;
