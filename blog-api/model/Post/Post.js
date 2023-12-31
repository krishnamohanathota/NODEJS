const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Post Title is requried"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Post description is requried"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Post Category is requried"],
    },
    numViews: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    disLikes: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Post Author is required"],
    },
    photo: {
      type: String,
      required: [true, "Photo is requried"],
    },
  },
  {
    timestamps: true,
  }
);

//Compile the Post model
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
