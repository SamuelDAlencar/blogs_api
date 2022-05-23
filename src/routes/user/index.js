const express = require('express');
const { signUp, getAll } = require('../../controllers/userController');
const { validateSignUp, validateToken } = require('../../middlewares');

const router = express.Router();

router.post('/', validateSignUp, signUp);
router.get('/', validateToken, getAll);

module.exports = router;
