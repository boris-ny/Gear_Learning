const express = require("express");
const router = express.Router();
const questionController = require("../controllers/questionController");

// Routes
router.post("/add-question", questionController.addQuestion);
router.get("/questions", questionController.getQuestions);
router.put("/update-question/:id", questionController.updateQuestion);
router.delete("/delete-question/:id", questionController.deleteQuestion);

module.exports = router;
