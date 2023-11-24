import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class User extends Model {}

User.init(
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    country: DataTypes.STRING,
    address: DataTypes.STRING,
    mobile: DataTypes.STRING,
    secretQuestion: DataTypes.STRING,
    secretAnswer: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: "User",
  }
);

export default User;
