const express = require("express");
const {
  commentCreateCtrl,
  commentDetailsCtrl,
  commentsCtrl,
  commentDeleteCtrl,
  commentUpdateCtrl,
} = require("../../controller/comment/commentController");

const commentsRouter = express.Router();

//POST/api/v1/comment
commentsRouter.post("/", commentCreateCtrl);

//GET/api/v1/comment/:id
commentsRouter.get("/:id", commentDetailsCtrl);

//GET/api/v1/comment
commentsRouter.get("/", commentsCtrl);

//DELETE/api/v1/comment/:id
commentsRouter.delete("/:id", commentDeleteCtrl);

//PUT/api/v1/comment/:id
commentsRouter.put("/:id", commentUpdateCtrl);

module.exports = commentsRouter;
