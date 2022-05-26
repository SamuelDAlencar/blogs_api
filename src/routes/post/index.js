const express = require('express');
const {
  post,
  getAll,
  getById,
  updateById,
  deleteById,
  getByQuery,
} = require('../../controllers/postController');
const {
  validateToken,
  validatePost,
  validatePostUpdate,
  validatePostDeletion,
} = require('../../middlewares');

const router = express.Router();

router.post('/', validateToken, validatePost, post);
router.get('/', validateToken, getAll);
router.get('/search', validateToken, getByQuery);
router.get('/:id', validateToken, getById);
router.put('/:id', validateToken, validatePostUpdate, updateById);
router.delete('/:id', validateToken, validatePostDeletion, deleteById);

module.exports = router;
