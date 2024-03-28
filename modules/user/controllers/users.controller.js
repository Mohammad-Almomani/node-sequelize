const { User } = require('../../../models');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const addUser = async (req, res, next) => {
    try {
      const { firstName, lastName, email, phoneNumber } = req.body;
      // Validate input if needed
  
      // Create user in the database
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        phoneNumber
      });
  
      res.status(201).json(newUser);
    } catch (error) {
        // let errors  = error.errors.map((e) => e.message);
        res.status(400).json({ error: error });
      next(error);
    }
  };


module.exports = { getUsers, addUser };
