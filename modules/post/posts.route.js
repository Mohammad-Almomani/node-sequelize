const express = require('express');
const { getPosts, getOnePost, addPost } = require('./post.controller');

const router = express.Router();

// GET /posts
router.get('/', getPosts);

// GET /posts/:id
router.get('/:id', getOnePost);

router.post('/', addPost);

module.exports = router;