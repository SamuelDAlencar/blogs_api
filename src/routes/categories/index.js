const express = require('express');
const { postCategory, getAll } = require('../../controllers/categoriesController');
const { validateToken } = require('../../middlewares');

const router = express.Router();

router.post('/', validateToken, postCategory);
router.get('/', validateToken, getAll);

module.exports = router;
