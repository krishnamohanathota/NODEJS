const User = require("../../model/User/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../../util/generateToken");
const getTokenFromHeader = require("../../util/getTokenFromHeader");
const { appError, AppError } = require("../../util/appError");

const userRegisterCtrl = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const userFound = await User.findOne({ email });

    if (userFound) {
      return next(
        new AppError(`User already exists with the given email ${email}`, 500)
      );
      /*
      return res.json({
        status: "success",
        data: `User already exists with the given email ${email}`,
      });
      */
    }

    //hash user password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //Create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashPassword,
    });

    res.json({
      status: "success",
      data: user,
    });
  } catch (error) {
    //res.json(error.message);

    //To handle the error message globally, we can use the next() function
    //next(error.message);

    //To get error stack trace, create a new Error object and pass the error message to it
    next(appError(error.message, 500));
  }
};

const userLoginCtrl = async (req, res) => {
  try {
    const { email, password } = req.body;

    //Check Email
    const user = await User.findOne({ email });
    if (!user) {
      return next(new AppError("User not found", 500));
      //return res.json({ status: "failed", data: "User not found" });
    }

    const isPasswordMatched = await bcrypt.compare(password, user.password);
    //console.log(isPasswordMatched);

    //Check Password
    if (!isPasswordMatched) {
      return next(new AppError("Invalid password", 500));
      //return res.json({ status: "failed", data: "Invalid password" });
    }

    res.json({
      status: "success",
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: await generateToken(user._id),
      },
    });
  } catch (error) {
    res.json(error.message);
  }
};

const userProfileCtrl = async (req, res) => {
  try {
    //const { id } = req.params;

    //console.log(req.userAuthId);
    // req.userAuthId -> This value set by the JWT token verufier
    const user = await User.findById(req.userAuthId);
    //console.log(user);

    res.json({ status: "success", data: user });
  } catch (error) {
    res.json(error.message);
  }
};

const userListCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "Complete Users List" });
  } catch (error) {
    res.json(error.message);
  }
};

const userDeleteCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "User Delete" });
  } catch (error) {
    res.json(error.message);
  }
};

const userUpdateCtrl = async (req, res) => {
  try {
    res.json({ status: "success", data: "User Update" });
  } catch (error) {
    res.json(error.message);
  }
};

module.exports = {
  userRegisterCtrl,
  userLoginCtrl,
  userProfileCtrl,
  userListCtrl,
  userDeleteCtrl,
  userUpdateCtrl,
};
