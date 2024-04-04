const { Comment } = require('../../models');

const getAllComments = async (req, res, next) => {
    try {
        const comments = await Comment.findAll();
        res.json(comments);
    } catch (error) {
        next(error);
    }
    }

const createComment = async (req, res, next) => {
    try {
      const { content, userId, postId } = req.body;
      const comment = await Comment.create({ content, userId, postId });
      res.status(201).json(comment);
    } catch (error) {
      next(error);
    }
  };
  
  // Controller function to get all comments for a specific post
  const getCommentsByPostId = async (req, res, next) => {
    try {
      const { postId } = req.params;
      const comments = await Comment.findAll({ where: { postId } });
      res.json(comments);
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = { createComment, getCommentsByPostId, getAllComments };