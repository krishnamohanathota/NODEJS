const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User is requried"],
    },
    title: {
      type: String,
      requried: [true, "Title is required"],
    },
  },
  {
    timestamps: true,
  }
);

//Compile the Category model
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
