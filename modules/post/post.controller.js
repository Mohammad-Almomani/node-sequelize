const { Post, User } = require('../../models');


const getPosts = async (req, res) => {
  try {
    // Retrieve posts from the Post Model
    const posts = await Post.findAll();

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getOnePost = async (req, res) => {
    try {
        // Retrieve a specific post from the Post Model
        const post = await Post.findAll({
            where: {
                id: req.params.id
            },
            include: {
                model: User, as: 'user', // Assuming you have imported the User model
                attributes: ['id', 'firstName', 'lastName', 'email'] // Include specific attributes of the User model
            }
        });
        
        if (!post.length) {
            return res.status(404).json({ message: 'Post not found' });
        }
        
        res.json(post[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


const addPost = async (req, res) => {
    try {
        const { title, content, userId } = req.body;
        // Validate input if needed

        // Create post in the database
        const newPost = await Post.create({
            title,
            content,
            userId
        });

        res.status(201).json(newPost);
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

module.exports = { getPosts, getOnePost, addPost };

