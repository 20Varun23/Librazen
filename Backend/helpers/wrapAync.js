const ExpressError = require("./ExpressError.js");

async function wrapAsync(fn) {
  try {
    return fn();
  } catch (err) {
    console.log("error : " + err);
    return ExpressError(err.error);
  }
}

module.exports = wrapAsync;
