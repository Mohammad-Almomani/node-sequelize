const { User, Post, Comment } = require('../../models');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
          include: {
            model: Post, as: 'posts'
        }
      });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json(user);
    } catch (error) {
      next(error);
    }
  };

const addUser = async (req, res, next) => {
    try {
      const { firstName, lastName, email, phoneNumber, username } = req.body;
      // Validate input if needed
  
      // Create user in the database
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        phoneNumber,
        username
      });
  
      res.status(201).json(newUser);
    } catch (error) {
        // let errors  = error.errors.map((e) => e.message);
        res.status(400).json({ error: error });
      next(error);
    }
  };


  const getUserWithPostsAndComments = async (req, res, next) => {
    try {
      const user = await User.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: Post,
            as: 'posts',
            include: [
              {
                model: Comment,
                as: 'comments',
              },
            ],
          },
        ],
      });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      next(error);
    }
  }


module.exports = { getUsers, addUser, getUser, getUserWithPostsAndComments };
