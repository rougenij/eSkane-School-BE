const express = require("express");
const router = express.Router();
const UserRouter = require("../routes/User.Routes");
const classRouter = require("../routes/Class.Routes");

router.use(UserRouter);
router.use(classRouter);

module.exports = router;
