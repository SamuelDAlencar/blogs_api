const express = require('express');
const { postCategory } = require('../../controllers/categoriesController');
const { validateToken } = require('../../middlewares');

const router = express.Router();

router.post('/', validateToken, postCategory);

module.exports = router;
