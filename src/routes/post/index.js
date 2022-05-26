const express = require('express');
const { post, getAll, getById } = require('../../controllers/postController');
const { validateToken, validatePost } = require('../../middlewares');

const router = express.Router();

router.post('/', validateToken, validatePost, post);
router.get('/', validateToken, getAll);
router.get('/:id', validateToken, getById);

module.exports = router;
