const express = require('express');
const loginRouter = require('./login');
const userRouter = require('./user');
const categoriesRouter = require('./categories');
const postRouter = require('./post');

const router = express.Router();

router.use('/login', loginRouter);
router.use('/user', userRouter);
router.use('/categories', categoriesRouter);
router.use('/post', postRouter);

module.exports = router;
