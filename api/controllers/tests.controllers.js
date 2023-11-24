const db = require("../db-connection");
const fileNames = require("../fileNames.json");
const { Test, Situation, Question, Option } = require("../models/tests.models");

const controllers = {
  createTest: async (req, res) => {
    try {
      const test = await Test.create(req.body);
      res.json(test);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getAllTests: async (req, res) => {
    try {
      const tests = await Test.findAll();
      res.json(tests);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  getTestById: async (req, res) => {
    try {
      const test = await Test.findByPk(req.params.id);
      res.json(test);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  updateTest: async (req, res) => {
    try {
      await Test.update(req.body, {
        where: {
          testId: req.params.id,
        },
      });
      res.json({ message: "Test updated" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  deleteTest: async (req, res) => {
    try {
      await Test.destroy({
        where: {
          testId: req.params.id,
        },
      });
      res.json({ message: "Test deleted" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },

  // Similar functions can be created for Situation, Question, and Option models
};

module.exports = controllers;
