const mongoose = requrie("mongoose");

const commentSchema = mongoose.schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: [true, "Post is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is requried"],
    },
    description: {
      type: String,
      required: [true, "Comment Description is required"],
    },
  },
  { timestamps: true }
);

//Compile the Comment model
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
