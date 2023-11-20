import { Schema, model } from 'mongoose';
import { hash, compare } from 'bcrypt';

const saltRounds = 10;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

UserSchema.pre('save', function(next) {const controllers = require("./controllers.js");
const express = require("express");

const router = express.Router();

router.get("/", controllers.getUsers);
router.get("/:id", controllers.getOne);
router.post("/login", controllers.login);
router.post("/", controllers.create);
router.put("/:id", controllers.update);
router.delete("/:id", controllers.delete);

module.exports = router;

  if (this.isNew || this.isModified('password')) {
    const document = this;
    hash(this.password, saltRounds, function(err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

UserSchema.methods.isCorrectPassword = function(password, callback) {
  compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

export default model('User', UserSchema);