const express = require('express');
const { post, getAll, getById, updateById } = require('../../controllers/postController');
const { validateToken, validatePost, validatePostUpdate } = require('../../middlewares');

const router = express.Router();

router.post('/', validateToken, validatePost, post);
router.get('/', validateToken, getAll);
router.get('/:id', validateToken, getById);
router.put('/:id', validateToken, validatePostUpdate, updateById);

module.exports = router;
