const express = require("express");
const wrapAsync = require("../helpers/wrapAync");
const supabase = require("../supabaseClient");
const router = express.Router({ mergeParams: true });
const httpCodes = require("../helpers/httpCodes.js");
const getAdminData = require("../helpers/getAdminData.js");

//GET all books
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const { data, error } = await supabase.from("Books").select();
    if (error) throw Error(error.message, 500);
    res.status(httpCodes.success).json(data);
  })
);

const gIdx = {
  Mystery: 0,
  "Literary Fiction": 1,
  "Historical Fiction": 2,
  "Contemporary Fiction": 3,
  Biography: 4,
  Memoir: 5,
  "Self-Help": 6,
  "Health & Wellness": 7,
};

//GRAPH DATA for books
router.get(
  "/graph",
  wrapAsync(async (req, res) => {
    const { data, error } = await supabase.from("Books").select();

    if (error) {
      throw new Error("couldn't get graph data");
    }

    console.log(data);

    let send = [0, 0, 0, 0, 0, 0, 0, 0];

    for (let el of data) {
      let idx = gIdx[el.genre];
      send[idx]++;
    }

    res.status(httpCodes.success).json({ send });
  })
);

//GET one book
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase.from("Books").select().eq("id", id);

    if (error) throw Error(error.message, 500);
    res.status(httpCodes.success).json(data);
  })
);

//POST new book
router.post(
  "/",
  wrapAsync(async (req, res) => {
    const email = getAdminData(req);

    if (!email) {
      throw new Error("admin token not present");
    }

    const { book } = req.body;
    const { error } = await supabase.from("Books").insert({ ...book });

    if (error) throw Error(error.message, 500);
    res.status(httpCodes.success).send("new book posted");
  })
);

//PATCH one book
router.patch(
  "/:id",
  wrapAsync(async (req, res) => {
    const email = getAdminData(req);

    if (!email) {
      throw new Error("admin token not present");
    }

    const { id } = req.params;

    const { book } = req.body;

    const { error } = await supabase
      .from("Books")
      .update({ ...book })
      .eq("id", id);

    if (error) throw Error(error.message, 500);
    res.status(httpCodes.success).send("book patched");
  })
);

//DELETE one book
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    const email = getAdminData(req);

    if (!email) {
      throw new Error("admin token not present");
    }

    const { id } = req.params;
    const { error } = await supabase.from("Books").delete().eq("id", id);

    if (error) throw Error(error.message, 500);
    res.status(httpCodes.success).send("book deleted");
  })
);

module.exports = router;
