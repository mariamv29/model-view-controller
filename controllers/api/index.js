const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const thoughtRoutes = require('./thought-routes');

router.use('/thoughts', thoughtRoutes);

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;