const { celebrate, Joi, Segments } = require("celebrate");
const Question = require("../models/questionModel");

// CRUD functions
async function getQuestions(req, res) {
  const page = req.query.page || 1;
  const perPage = 10; // Adjust as needed

  try {
    const questions = await Question.find()
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.json({ questions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching questions" });
  }
}

// Joi schema for request validation
const questionSchema = Joi.object({
  text: Joi.string().required(),
  options: Joi.array().items(Joi.string()).min(2).required(),
  correctOption: Joi.string().required(),
});

// CRUD functions
const addQuestion = celebrate(
  {
    [Segments.BODY]: questionSchema,
  },
  async (req, res) => {
    const { text, options, correctOption } = req.body;

    try {
      const newQuestion = await Question.create({
        text,
        options,
        correctOption,
      });

      res.status(201).json({
        message: "Question added successfully",
        question: newQuestion,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error adding question" });
    }
  }
);
async function updateQuestion(req, res) {
  const { text, options, correctOption } = req.body;

  try {
    const updatedQuestion = await Question.findByIdAndUpdate(
      req.params.id,
      { text, options, correctOption },
      { new: true } // Returns the updated document
    );

    if (!updatedQuestion) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.json({
      message: "Question updated successfully",
      question: updatedQuestion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error updating question" });
  }
}

async function deleteQuestion(req, res) {
  try {
    const deletedQuestion = await Question.findByIdAndRemove(req.params.id);

    if (!deletedQuestion) {
      return res.status(404).json({ error: "Question not found" });
    }

    res.json({ message: "Question deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error deleting question" });
  }
}

module.exports = {
  addQuestion,
  getQuestions,
  updateQuestion,
  deleteQuestion,
};
