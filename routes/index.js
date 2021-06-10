const router = require('express').Router();
const homeRoutes = require('./home-routes');
const searchRoutes = require('./search-routes');
const allGameRoutes = require('./allgames-routes');
const apiRoutes = require('./api/')


//updated..

router.use('/', homeRoutes)
router.use('/search', searchRoutes)
router.use('/api', apiRoutes)
router.use('/all', allGameRoutes)



module.exports = router;
