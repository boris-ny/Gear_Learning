import User from "../models/users.models.js";

const controllers = {
  createUser: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      await User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: "User updated" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json({ message: "User deleted" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};

export default controllers;
