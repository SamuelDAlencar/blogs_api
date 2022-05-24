const express = require('express');
const { post } = require('../../controllers/postController');
const { validateToken, validatePost } = require('../../middlewares');

const router = express.Router();

router.post('/', validateToken, validatePost, post);

module.exports = router;
