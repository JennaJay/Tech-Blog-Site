const router = require('express').Router();

const userRoutes = require('./userRoutes');
const postingRoute = require('./postingRoute');
const commentRoute = require('./commentRoute');

router.use('/users', userRoutes);
router.use('/postings', postingRoute);
router.use('/comments', commentRoute);

module.exports = router;
