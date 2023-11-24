import { Router } from "express";
import controllers from "../controllers/users.controllers.js";

const router = Router();

// router.post("/", controllers.createUser);
router.get("/", controllers.getAllUsers);
router.get("/:id", controllers.getUserById);
router.put("/:id", controllers.updateUser);
router.delete("/:id", controllers.deleteUser);

export default router;
