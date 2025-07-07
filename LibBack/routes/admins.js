const express = require("express");
const wrapAsync = require("../helpers/wrapAync");
const router = express.Router({ mergeParams: true });
const app = express();

//GET one admin
app.get("/:id", (req, res) => {
  wrapAsync();
});

//LOGIN admin
app.post("/", (req, res) => {
  wrapAsync();
});

//LOGOUT admin
app.post("/", (req, res) => {
  wrapAsync();
});
