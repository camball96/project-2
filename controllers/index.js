const router = require('express').Router();
const homeRoutes = require('./home-routes');
const resultsRoutes = require('./results-routes');
const apiRoutes = require('../routes/')


//updated..

router.use('/', homeRoutes)
router.use('/results', resultsRoutes)
router.use('/api', apiRoutes)




module.exports = router;
