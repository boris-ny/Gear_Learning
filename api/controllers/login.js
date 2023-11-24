
import withAuth from "./Authentication.js";
import User from "../models/users.models.js";
import { Router } from "express";
import jwt from "jsonwebtoken";

const router = Router();


router.get("/secret", withAuth, function (req, res) {
  res.send("You are visiting a protected page.");
});

router.post("/register", function (req, res) {
  const { email, password } = req.body;
  const user = new User({ email, password });
  user.save(function (err) {
    if (err) {
      console.log(err);
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

router.post("/login", async function (req, res) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: { email: email },
    });

    if (!user) {
      res.status(401).json({
        error: "Incorrect email or password",
      });
    } else {
      user.isCorrectPassword(password, function (err, same) {
        if (err) {
          res.status(500).json({
            error: "Internal error please try again",
          });
        } else if (!same) {
          res.status(401).json({
            error: "Incorrect email or password",
          });
        } else {
          // Issue token
          const payload = { email };
          const token = jwt.sign(payload, secret, {
            expiresIn: "1h",
          });
          res.cookie("token", token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal error please try again",
    });
  }
});


router.get("/checkToken", withAuth, function (req, res) {
  res.sendStatus(200);
});

export default router;
