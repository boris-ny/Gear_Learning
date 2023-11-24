import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Comment extends Model {}

Comment.init(
  {
    name: DataTypes.STRING,
    message: DataTypes.STRING,
    type: DataTypes.STRING,
    time: DataTypes.DATE,
  },
  {
    sequelize,
    modelName: "Comment",
  }
);

module.exports = Comment;
