let isProd = true;
let backend_link;
export default backend_link = isProd
  ? `${import.meta.env.VITE_EXPRESS_LINK}`
  : "http://localhost:8080";
