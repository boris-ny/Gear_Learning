const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Routes
router.post("/add-user", userController.addUser);
router.get("/users", userController.getUsers);
router.put("/update-user/:id", userController.updateUser);
router.delete("/delete-user/:id", userController.deleteUser);

module.exports = router;
