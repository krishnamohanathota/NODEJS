const getTokenFromHeader = require("../util/getTokenFromHeader");
const verifyToken = require("../util/verifyToken");
const { AppError } = require("../util/appError");

const isLogin = (req, res, next) => {
  const token = getTokenFromHeader(req);

  if (!token) {
    return res.json({
      status: "failed",
      message: "Token is missing",
    });
  } else {
    const tokenResult = verifyToken(token);
    if (!tokenResult) {
      return next(new AppError("Token verification failed", 500));
      /*
      return res.json({
        status: "failed",
        message: "Token verification failed",
      });
      */
    } else {
      req.userAuthId = tokenResult.id;
    }
  }

  //Execute the next middleware
  next();
};

module.exports = isLogin;
