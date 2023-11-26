const User = require("./models/userModel");
const Question = require("./models/questionModel");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://bnyilindek:M4lJ7lHNpSHhM43h@clusteralu.gsbia9o.mongodb.net/?retryWrites=true&w=majority";

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error to ensure the script exits
  }
}

async function closeDatabaseConnection() {
  try {
    await mongoose.connection.close();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
  }
}
async function createMockDrivingTestQuestions() {
  try {
    // Create mock questions for a driving test
    const question1 = await Question.create({
      text: "What does a yellow traffic light indicate?",
      options: ["Stop", "Proceed with caution", "Speed up", "Reverse"],
      correctOption: "Proceed with caution",
    });

    const question2 = await Question.create({
      text: "What is the legal blood alcohol concentration (BAC) limit for driving in most places?",
      options: ["0.05%", "0.08%", "0.10%", "0.15%"],
      correctOption: "0.08%",
    });

    const question3 = await Question.create({
      text: "When approaching a pedestrian crossing, what should you do?",
      options: [
        "Increase speed to clear the crossing quickly",
        "Sound the horn to alert pedestrians",
        "Slow down and be prepared to stop",
        "Swerve around pedestrians",
      ],
      correctOption: "Slow down and be prepared to stop",
    });

    console.log(
      "Mock driving test questions created:",
      question1,
      question2,
      question3
    );
  } catch (error) {
    console.error("Error creating mock driving test questions:", error);
  }
}

async function createMockUsers() {
  try {
    // Hash passwords for the mock users
    const hashedPassword1 = await bcrypt.hash("password123", 10);
    const hashedPassword2 = await bcrypt.hash("securePwd456", 10);

    // Create mock users
    const user1 = await User.create({
      username: "john_doe",
      password: hashedPassword1,
      isAdmin: true,
    });

    const user2 = await User.create({
      username: "jane_smith",
      password: hashedPassword2,
      isAdmin: false,
    });

    console.log("Mock users created:", user1, user2);
  } catch (error) {
    console.error("Error creating mock users:", error);
  }
}

// Connect to the database first
connectToDatabase()
  .then(async () => {
    // Execute the functions and create mock data
    await createMockUsers();
    await createMockDrivingTestQuestions();
  })
  .finally(() => {
    // Close the database connection after executing the functions
    closeDatabaseConnection();
  });