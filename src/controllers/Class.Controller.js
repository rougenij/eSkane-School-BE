const Class = require("../model/Classes");
const User = require("../model/User");

const getAllClasses = async (req, res) => {
  try {
    const allClasses = await Class.find({});
    if (!allClasses)
      return res.status(400).send("No classes created in the database");
    res.status(200).send(allClasses);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const createNewClass = async (req, res) => {
  try {
    const newClass = await new Class(req.body);
    const user = await User.findById(req.body.userId);

    const updatedClasses = user.enRolledClasses;

    updatedClasses.push(newClass);
    await user.updateOne({ enRolledClasses: updatedClasses });

    await newClass.save();
    res.status(201).send("Class has been created successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getUserClasses = async (req, res) => {
  try {
    const userClassess = await User.findById(req.params.userId);
    res.status(200).send(userClassess);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  getAllClasses,
  createNewClass,
  getUserClasses,
};
