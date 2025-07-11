const express = require("express");
const wrapAsync = require("../helpers/wrapAync");
const supabase = require("../supabaseClient");
const router = express.Router({ mergeParams: true });
const bcrypt = require("bcrypt");
const httpCodes = require("../helpers/httpCodes.js");
const jwt = require("jsonwebtoken");
const getAdminData = require("../helpers/getAdminData.js");

//LOGIN admin
router.post(
  "/login",
  wrapAsync(async (req, res) => {
    const { email, password } = req.body;
    const { data, error } = await supabase
      .from("Admin")
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

    const adminData = {
      email: email,
    };

    const token = jwt.sign(adminData, process.env.TOKEN_SECRET_ADMIN, {
      expiresIn: "1d",
    });

    res
      .status(httpCodes.success)
      .cookie("isAdmin", true, {
        path: "/",
        secure: true,
        sameSite: "None",
        path: "/",
      })
      .cookie("admin", token, {
        httpOnly: true,
        path: "/",
        secure: true,
        sameSite: "None",
        path: "/",
      })
      .send("successfull");
  })
);

//ISSUE of book
router.post(
  "/issue/:id",
  wrapAsync(async (req, res) => {
    const adminEmail = getAdminData(req);

    if (!adminEmail) {
      throw new Error("Unauthorized");
    }

    const { id } = req.params;
    const { email } = req.body;

    const dbRes = await supabase
      .from("User")
      .select("name")
      .eq("email", email)
      .single();

    const user = dbRes.data;
    const err1 = dbRes.error;

    if (err1) {
      throw new Error("Error occured");
    }

    if (!user) {
      throw new Error("Person not registered");
    }

    const { data, error } = await supabase
      .from("Borrowings")
      .select("overdue")
      .eq("email", email);

    if (error) {
      throw new Error("Error while checking valid issue");
    }
    if (data.length >= 3) {
      throw new Error("Cannot issue more books");
    }

    for (let el of data) {
      if (el.overdue > 0) {
        throw new Error("Has not payed overdue amount");
      }
    }

    //valid issue of books

    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 14);

    const formattedDate = futureDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });

    const { errorInsert } = await supabase
      .from("Borrowings")
      .insert({ email: email, id: id, due: formattedDate });

    if (errorInsert) {
      console.log(errorInsert);
      throw new Error("could not insert value : " + errorInsert.message);
    }

    const { errorBookIssued } = await supabase
      .from("Books")
      .update({ issued: true })
      .eq("id", id);

    if (errorBookIssued) {
      console.log(errorBookIssued);
      throw new Error("could not make the change");
    }

    res.status(httpCodes.success).send("Book has been issued");
  })
);

//GET INFO of issuer
router.get(
  "/issuer/:id",
  wrapAsync(async (req, res) => {
    const adminEmail = getAdminData(req);

    if (!adminEmail) {
      throw new Error("Unauthorized");
    }

    const { id } = req.params;

    const res1 = await supabase
      .from("Borrowings")
      .select("email")
      .eq("id", id)
      .single();

    if (res1.error) {
      throw new Error("couldn't get email");
    }

    const { data, error } = await supabase
      .from("User")
      .select("name,email,books_read")
      .eq("email", res1.data.email)
      .single();

    if (error) {
      throw new Error("could not full user");
    }

    res.status(httpCodes.success).json(data);
  })
);

//RETURN of book
router.post(
  "/return/:id",
  wrapAsync(async (req, res) => {
    const adminEmail = getAdminData(req);

    if (!adminEmail) {
      throw new Error("Unauthorized");
    }

    const { id } = req.params;
    const { email, booksRead } = req.body;

    const dbRes = await supabase
      .from("User")
      .select("name")
      .eq("email", email)
      .single();

    const user = dbRes.data;
    const err1 = dbRes.error;

    console.log(user);

    if (err1) {
      throw new Error("Error occured");
    }

    if (!user) {
      throw new Error("Person not registered");
    }

    const { error } = await supabase.from("Borrowings").delete().eq("id", id);

    if (error) {
      throw new Error("Could not be returned, db problem");
    }

    const incReading = await supabase
      .from("User")
      .update({ books_read: booksRead + 1 })
      .eq("email", email);

    if (incReading.error) {
      console.log(incReading.error);
      throw new Error("could not increase rading point of user");
    }

    const freeBook = await supabase
      .from("Books")
      .update({ issued: false })
      .eq("id", id);

    if (freeBook.error) {
      console.log(freeBook.error);
      throw new Error("could not increase rading point of user");
    }

    res.status(httpCodes.success).send("book returned");
  })
);

//LOGOUT of admin
router.post(
  "/logout",
  wrapAsync((req, res) => {
    res.clearCookie("admin", { httpOnly: true, path: "/", sameSite: "Lax" });
    res.clearCookie("isAdmin", {
      path: "/",
      sameSite: "Lax",
    });
    res.send("cookie cleared");
  })
);

module.exports = router;
