const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const userRoutes = require("./routes/userRoutes");
const questionRoutes = require("./routes/questionRoutes");
const errorHandler = require("./middlewares/errorHandler");
const { SECRET_KEY } = require("./config");
require('dotenv').config();


const app = express();
const port = 8000;

// Connect to the database
const mongoURI = process.env.DB_URL;

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}



connectToDatabase().catch((error) => {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1); // Ensures the script exits if an error is thrown
});
// Middleware
app.use(express.json()); // Body parser
app.use(passport.initialize());
require("./middlewares/auth");

// Routes
app.use("/", userRoutes);
app.use(
  "/",
//   passport.authenticate("jwt", { session: false }),
  questionRoutes
);

// Use the error handler as the last middleware
app.use(errorHandler);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
