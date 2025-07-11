let isProd = true;
let frontend_link;
frontend_link = isProd
  ? `${process.env.FRONTEND_LINK}`
  : "http://localhost:5173";

module.exports = frontend_link;
