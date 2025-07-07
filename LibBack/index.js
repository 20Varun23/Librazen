const express = require("express");
const port = 8080;
const app = express();
const users = require("./routes/users.js");
const books = require("./routes/books.js");
const admins = require("./routes/admins.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", users);
app.use("/admin", admins);
app.use("/books", books);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
