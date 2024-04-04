const express = require("express");
const db = require("./models");
// const sequelize = require('./config/config.json');
const usersRoute = require("./modules/user/users.route");
const postsRoute = require("./modules/post/posts.route");
const commentsRoute = require("./modules/comment/comments.routes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/users", usersRoute);
app.use("/posts", postsRoute);
app.use("/comments", commentsRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
    res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Start the server
const PORT = process.env.PORT || 3000;
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
