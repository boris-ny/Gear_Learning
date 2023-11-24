import { Router } from "express";
import 

const router = Router();

router.route("/").post(withAuth.login);

export default router;
