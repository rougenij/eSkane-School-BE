const User = require("../model/User");

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});
    if (!allUsers) return res.status(400).send("No Users in the database");
    res.status(200).send(allUsers);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const addUser = async (req, res) => {
  try {
    const user = await new User(req.body);
    const token = await user.generateAuthToken();
    await user.save();
    res.status(201).send({ status: "success" });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const logIn = async (req, res) => {
  try {
    //findByCredentials - madeup function that has been created at the user model
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.status(200).send({ status: "success", user, token });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const logOut = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send();
  } catch (e) {
    res.status(500).send();
  }
};



const updateUser = async (req, res) => {
  const userId = req.body.userId;
  const { email, firstName, lastName } = req.body;
  try {
    const user = await User.findByIdAndUpdate(
      userId,
      {
        email,
        firstName,
        lastName,
      },
      { new: true }
    );
    console.log(user);
    res.status(200).send("update done");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getUser = async (req, res) => {
  const userId = req.params.userId;
  try {
    const user = await User.findById(userId);
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = {
  addUser,
  logIn,
  logOut,
  getAllUsers,
  updateUser,
  getUser,
};
