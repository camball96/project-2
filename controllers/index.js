const router = require('express').Router();
const homeRoutes = require('./home-routes');
const searchRoutes = require('./search-routes');
const apiRoutes = require('../routes/')


//updated..

router.use('/', homeRoutes)
router.use('/search', searchRoutes)
router.use('/api', apiRoutes)



module.exports = router;
