const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const authRoutes = require("./routes/auth.js");
const userRoutes = require("./routes/users.js");
const postRoutes = require("./routes/posts.js");
const convRoutes = require("./routes/conversation.js");
const messageRoutes = require("./routes/message.js");

dotenv.config();
const connect = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to mongoDB");
  } catch (err) {
    console.log(err);
  }
};

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("common"));

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/conversations", convRoutes);
app.use("/message", messageRoutes);

app.listen(5000, () => {
  connect();
  console.log("Server is running on port ");
});
