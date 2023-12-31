const express = require("express");
const {
  postCreateCtrl,
  postDetailsCtrl,
  postsCtrl,
  postDeleteCtrl,
  postUpdateCtrl,
} = require("../../controller/post/postController");

const postRouter = express.Router();

//POST/api/v1/posts
postRouter.post("/", postCreateCtrl);

//GET/api/v1/posts/:id
postRouter.get("/:id", postDetailsCtrl);

//GET/api/v1/posts
postRouter.get("/", postsCtrl);

//DELETE/api/v1/users/:id
postRouter.delete("/:id", postDeleteCtrl);

//PUT/api/v1/posts/:id
postRouter.put("/:id", postUpdateCtrl);

module.exports = postRouter;
