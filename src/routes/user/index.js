const express = require('express');
const { signUp } = require('../../controllers/userController');
const { validateSignUp } = require('../../middlewares');

const router = express.Router();

router.post('/', validateSignUp, signUp);

module.exports = router;
