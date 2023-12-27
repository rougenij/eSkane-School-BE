const mongoose = require("mongoose");
require("dotenv").config();
const password = process.env.PASSWORD;

mongoose.connect(
  `mongodb+srv://rouge:${password}@eskane-backend.eaw5txu.mongodb.net/`,
  {}
);
