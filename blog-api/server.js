const express = require("express");
const userRouter = require("./routes/user/userRoutes");
const postRouter = require("./routes/post/postRouter");
const commentsRouter = require("./routes/comment/commentsRouter");
const categoryRouter = require("./routes/category/categoryRouter");

require("./config/dbConnect");

const app = express();

const userAuth = {
  isLogin: true,
  isAdmin: false,
};

//Pass incoming payload (i.e. to able to read the request body / payload)
app.use(express.json());

// Middlewares
app.use((req, res, next) => {
  if (userAuth.isLogin == true) next();
  else {
    res.json({ msg: "User Not logged in" });
  }
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);
app.use("/api/v1/comment", commentsRouter);
app.use("/api/v1/category", categoryRouter);

const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is up & running on port ${PORT}`));
