const getTokenFromHeader = (req) => {
  const headerObj = req.headers;

  const authorizationHeader = headerObj && headerObj["authorization"];

  //Authorization : Bearer dfdsfdfsdfs
  if (authorizationHeader) {
    const parts = authorizationHeader.split(" ");

    if (parts.length === 2) {
      const token = parts[1];
      // Now you have the token
      //console.log(token);
      return token;
    } else {
      console.error("Invalid Authorization header format");
    }
  } else {
    console.error("Authorization header is missing");
  }

  return false;
};

module.exports = getTokenFromHeader;
