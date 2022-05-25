const express = require('express');
const { post, getAll } = require('../../controllers/postController');
const { validateToken, validatePost } = require('../../middlewares');

const router = express.Router();

router.post('/', validateToken, validatePost, post);
router.get('/', validateToken, getAll);

module.exports = router;
