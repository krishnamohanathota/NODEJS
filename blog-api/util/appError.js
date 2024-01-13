//Error Function
const appError = (message, statusCode) => {
  //When Error Object is created, it has a property called stack trace
  const error = new Error(message);
  error.statusCode = statusCode || 500;

  return error;
};

//Error Class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;
    //this.status = "failed";
  }
}

module.exports = { appError, AppError };
