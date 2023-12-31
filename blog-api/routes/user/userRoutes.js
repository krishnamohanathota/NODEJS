const express = require("express");
const {
  userRegisterCtrl,
  userLoginCtrl,
  userProfileCtrl,
  userListCtrl,
  userDeleteCtrl,
  userUpdateCtrl,
} = require("../../controller/user/userController");

const isLogin = require("../../middleware/isLogin");

const userRouter = express.Router();

//POST/api/v1/users/register
userRouter.post("/register", userRegisterCtrl);

//POST/api/v1/users/login
userRouter.post("/login", userLoginCtrl);

//GET/api/v1/users/profile/:id
userRouter.get("/profile", isLogin, userProfileCtrl);

//GET/api/v1/users
userRouter.get("/", userListCtrl);

//DELETE/api/v1/users/:id
userRouter.delete("/:id", userDeleteCtrl);

//PUT/api/v1/users/:id
userRouter.put("/:id", userUpdateCtrl);

module.exports = userRouter;
