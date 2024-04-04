const { Router } = require("express");
const { getCommentsByPostId, createComment, getAllComments } = require("./comments.controller");

const router = Router();


router.get('/', getAllComments);
router.get('/:postId', getCommentsByPostId);
router.post('/', createComment);

module.exports = router;