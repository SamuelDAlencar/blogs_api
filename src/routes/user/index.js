const express = require('express');
const { signUp, getAll, getById } = require('../../controllers/userController');
const { validateSignUp, validateToken } = require('../../middlewares');

const router = express.Router();

router.get('/:id', validateToken, getById);
router.get('/', validateToken, getAll);
router.post('/', validateSignUp, signUp);

module.exports = router;
