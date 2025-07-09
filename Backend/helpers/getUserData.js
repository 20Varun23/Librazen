const jwt = require("jsonwebtoken");

module.exports = function getUserData(req) {
  try {
    const token = req.cookies.user;

    if (!token) {
      return new Error("no token");
    }
    console.log("data present");
    const data = jwt.verify(token, process.env.TOKEN_SECRET_USER);
    return data.email;
  } catch (err) {
    console.error("some error there", err.message);
    return null;
  }
};
