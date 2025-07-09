const express = require("express");
const router = express.Router({ mergeParams: true });
const ExpressError = require("../helpers/ExpressError.js");
const wrapAsync = require("../helpers/wrapAync.js");
const supabase = require("../supabaseClient.js");
const bcrypt = require("bcrypt");
const httpCodes = require("../helpers/httpCodes.js");
const jwt = require("jsonwebtoken");
const getUserData = require("../helpers/getUserData.js");

//GET all router for leaderboard
router.get(
  "/leaderboard",
  wrapAsync(async (req, res) => {
    const { data, error } = await supabase
      .from("User")
      .select("name,books_read")
      .order("books_read", { ascending: false });

    if (error) throw Error(error.message, 500);
    console.log(data);
    res.status(httpCodes.success).json(data);
  })
);

//LOGIN user
router.post(
  "/login",
  wrapAsync(async (req, res) => {
    const { email, password } = req.body;

    const { data, error } = await supabase
      .from("User")
      .select()
      .eq("email", email)
      .single();

    if (error) {
      throw Error(error.message);
    }

    const validPassword = await bcrypt.compare(password, data.password);

    if (!validPassword) {
      console.log("invalid password");
      throw new Error("invalid password");
    }

    const userData = {
      email: email,
    };

    const token = jwt.sign(userData, process.env.TOKEN_SECRET_USER, {
      expiresIn: "1d",
    });

    res
      .status(httpCodes.success)
      .cookie("isLoggedIn", true)
      .cookie("user", token, {
        httpOnly: true,
        path: "/",
        sameSite: "Lax",
      })
      .send("successfull");
  })
);

//GET one user
router.post(
  "/dashboard",
  wrapAsync(async (req, res) => {
    const email = getUserData(req);

    if (!email) {
      throw new Error("no token");
    }

    const { data, error } = await supabase
      .from("User")
      .select("name,age,books_read,email")
      .eq("email", email)
      .single();

    if (error) {
      throw error;
    }

    console.log(data);

    if (error) throw Error(error.message, 500);
    return res.status(httpCodes.success).json(data);
  })
);

//GET OVERDUE of user
router.post(
  "/overdue",
  wrapAsync(async (req, res) => {
    const email = getUserData(req);

    if (!email) {
      throw new Error("no token");
    }

    const { data, error } = await supabase
      .from("Borrowings")
      .select("overdue")
      .eq("email", email);

    let amt = 0;

    for (let el of data) {
      amt += el.overdue;
    }

    res.status(httpCodes.success).send(amt);
  })
);

//POST one user
router.post(
  "/",
  wrapAsync(async (req, res) => {
    console.log("came here");

    const { user } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(user.password, salt);

    const { error } = await supabase
      .from("User")
      .insert([{ ...user, password: hashedPass }])
      .select()
      .single();

    if (error) throw Error(error.message, 500);
    res.status(httpCodes.created).send("user posted");
  })
);

//PATCH one user
router.patch(
  "/",
  wrapAsync(async (req, res) => {
    const email = getUserData(req);
    if (!email) {
      throw new Error("no token");
    }
    const { user } = req.body;
    const { error } = await supabase
      .from("User")
      .update({ ...user })
      .eq("email", email);

    if (error) throw new Error(error.message);

    return res.status(httpCodes.success).send("user patched");
  })
);

//DELETE user
router.delete(
  "/",
  wrapAsync(async (req, res) => {
    const email = getUserData(req);
    if (!email) {
      throw new Error("unauthorized");
    }

    console.log(email);

    const { error } = await supabase.from("User").delete().eq("email", email);

    if (error) throw new Error(error);

    res.status(httpCodes.success).send("deleted user");
  })
);

//LOGOUT route
router.post(
  "/logout",
  wrapAsync((req, res) => {
    res.clearCookie("user", { httpOnly: true, path: "/", sameSite: "Lax" });
    res.clearCookie("isLoggedIn", {
      path: "/",
      sameSite: "Lax",
    });
    res.send("cookie cleared");
  })
);

module.exports = router;
