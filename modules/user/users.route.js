const express = require('express');
const { getUsers, addUser, getUser, getUserWithPostsAndComments } = require('./users.controller');

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', addUser);
router.get('/posts/:id', getUserWithPostsAndComments);

module.exports = router;
