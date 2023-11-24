import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Test extends Model {}

Test.init(
  {
    testId: { type: DataTypes.INTEGER, primaryKey: true },
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Test",
  }
);

class Situation extends Model {}

Situation.init(
  {
    situationId: { type: DataTypes.INTEGER, primaryKey: true },
    testId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    image: DataTypes.STRING,
    audio: DataTypes.STRING,
    sequence: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Situation",
  }
);

class Question extends Model {}

Question.init(
  {
    questionId: { type: DataTypes.INTEGER, primaryKey: true },
    situationId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    audio: DataTypes.STRING,
    explanation: DataTypes.STRING,
    correctOption: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "Question",
  }
);

class Option extends Model {}

Option.init(
  {
    optionId: { type: DataTypes.INTEGER, primaryKey: true },
    text: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "Option",
  }
);

module.exports = { Test, Situation, Question, Option };
