const express = require("express");
const res = require("express/lib/response");
const { getNotes, createNote,  deleteNote, updateNote } = require("../controllers/noteController");
const auth = require("../middlewares/auth");
const noteRouter = express.Router();


noteRouter.get("/",auth , getNotes);


noteRouter.post("/",auth , createNote);

noteRouter.delete("/:id",auth, deleteNote);

noteRouter.purge("/:id",auth, updateNote);


module.exports = noteRouter;
