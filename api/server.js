import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";
// import mongoose from './db/mongoose.js'

const app = express();

const secret = "mysecretsshhh";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));

// if user makes a request http://localhost:5000/api/home it will go to ./home/index.js
import router from "./home/routes.js";
app.use("/", router);
import login from "./login/login.js";
app.use("/", login);
import index from "./tests/index.js"; // ./tests/index.js
app.use("/tests", index);
import  from "./comment/index.js";
app.use("/comment", comment);
import users from "./users";
app.use("/users", users);

export default app;
