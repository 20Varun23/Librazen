let isProd = true;
let backend_link;
export default backend_link = isProd
  ? `${process.env.FRONTEND_LINK}`
  : "http://localhost:5173";
