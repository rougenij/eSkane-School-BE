const express = require("express");
const auth = require("../middleware/auth");
const {
  addUser,
  logIn,
  logOut,
  getAllUsers,
  updateUser,
  getUser,
} = require("../controllers/User.Controllers");

// API ROUTER
const userRouter = express.Router();

userRouter.get("/users", getAllUsers);
userRouter.get("/user/:userId", getUser);

userRouter.post("/users/register", addUser);
userRouter.post("/users/login", logIn);
userRouter.post("/users/logout", auth, logOut);

userRouter.put("/users/change", updateUser);

module.exports = userRouter;
