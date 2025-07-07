const express = require("express");
const wrapAsync = require("../helpers/wrapAync");
const router = express.Router({ mergeParams: true });
const app = express();

//GET all books
app.get("/", (req, res) => {
  wrapAsync();
});

//GET one book
app.get("/:id", (req, res) => {
  wrapAsync();
});

//POST new book
app.post("/:id", (req, res) => {
  wrapAsync();
});

//PATCH one book
app.patch("/:id", (req, res) => {
  wrapAsync();
});

//DELETE one book
app.delete("/:id", (req, res) => {
  wrapAsync();
});
