import { Sequelize } from "sequelize";

import dotenv from "dotenv";

/**
 * Creates a new Sequelize instance with the provided database URL.
 * Initializes the Sequelize instance and logs a message to the console upon successful initialization.
 * @returns The initialized Sequelize instance.
 */
dotenv.config();

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/database.sqlite",
});

sequelize
  .sync({
    alter: true,
  })
  .then(() => {
    console.log("Sequelize initialized");
  })
  .catch((err) => {
    console.error("Sequelize Initialisation threw an error:", err);
  });

export default sequelize;
