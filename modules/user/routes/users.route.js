const express = require('express');
const { getUsers, addUser, getUser } = require('../controllers/users.controller');

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', addUser);

module.exports = router;
