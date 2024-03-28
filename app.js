const express = require("express");
const db = require("./models");
// const sequelize = require('./config/config.json');
const usersRoute = require("./modules/user/routes/users.route");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/users", usersRoute);

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
