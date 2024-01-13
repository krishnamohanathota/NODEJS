const globalErrorHandler = (err, req, res, next) => {
  //console.log(err);

  //We can access the Error Stack trace only when Error object is passed or thrown from the above middleware (i.e. userRegisterCtrl)
  //console.log(err.stack);
  /*
   * Error object has 3 properties:
   * 1. status
   * 2. message
   * 3. stack trace
   */
  const staus = err.status || "failed";
  const message = err.message || "Something went wrong";
  const stack = err.stack || "No stack trace available";
  const statusCode = err.statusCode || 500;

  //Send the error response
  res.status(statusCode).json({
    status: staus,
    message,
    stack,
  });
};

module.exports = globalErrorHandler;
