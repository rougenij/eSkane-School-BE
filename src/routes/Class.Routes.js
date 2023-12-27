const express = require("express");
const {
  getAllClasses,
  createNewClass,
  getUserClasses,
} = require("../controllers/Class.Controller");

// API ROUTER
const classRouter = express.Router();

classRouter.get("/classes", getAllClasses);
classRouter.get("/userClasses/:userId", getUserClasses);

classRouter.post("/class/create", createNewClass);

module.exports = classRouter;
