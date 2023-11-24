import { Router } from "express";
// import testRouter from "./tests.routes.js";
// import commentRouter from "./comments.routes.js";
import userRouter from "./user.routes.js";
import loginRouter from "../controllers/login.js"

const router = Router();

router.get("/", (req, res) => {
  return res.send("API is running");
});

// router.use("/tests", testRouter);

// router.use("/comments", commentRouter);

router.use("/users", userRouter);
router.use("/", loginRouter);

export default router;
