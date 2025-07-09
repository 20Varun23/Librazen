const express = require("express");
const port = 8080;
const app = express();
const users = require("./routes/users.js");
const books = require("./routes/books.js");
const admins = require("./routes/admins.js");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use("/users", users);
app.use("/admin", admins);
app.use("/books", books);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
