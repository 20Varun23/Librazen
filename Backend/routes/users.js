const express = require("express");
const router = express.Router({ mergeParams: true });
const app = express();
const ExpressError = require("ExpressError");
const wrapAsync = require("../helpers/wrapAync.js");

//GET all users
app.get("/", (req, res) => {
  wrapAsync();
});

//LOGIN user
app.post("/:id", (req, res) => {
  wrapAsync();
});

//GET one user
app.get("/:id", (req, res) => {
  wrapAsync();
  //get one user
});

//POST one user
app.post("/:id", (req, res) => {
  wrapAsync();
});

//PATCH one user
app.patch("/:id", (req, res) => {
  wrapAsync();
});

//LOGOUT user
app.post("/:id", (req, res) => {
  wrapAsync();
});

//DELETE user
app.post("/:id", (req, res) => {
  wrapAsync();
});
