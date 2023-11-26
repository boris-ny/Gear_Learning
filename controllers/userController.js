const User = require("../models/userModel");

const bcrypt = require("bcrypt");
const { celebrate, Joi, Segments } = require("celebrate");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config"); // Create a file named 'config.js' to store your secret key

const userSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
  isAdmin: Joi.boolean().default(false),
});

// CRUD functions
const addUser = celebrate(
  {
    [Segments.BODY]: userSchema,
  },
  async (req, res) => {
    const { username, password, isAdmin } = req.body;

    try {
      const user = await User.create({
        username,
        password, // This will be automatically hashed in the pre-save hook
        isAdmin,
      });

      const token = generateToken(user);

      res.status(201).json({ message: "User added successfully", user, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error adding user" });
    }
  }
);

function generateToken(user) {
  return jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, SECRET_KEY, {
    expiresIn: "1h",
  });
}

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching users" });
  }
}

async function updateUser(req, res) {
  const { username, password, isAdmin } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { username, password, isAdmin },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating user" });
  }
}

async function deleteUser(req, res) {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting user" });
  }
}

module.exports = {
  addUser,
  getUsers,
  updateUser,
  deleteUser,
};
