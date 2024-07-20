const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnect = require("./src/db/db.config");
const todoRouter = require("./src/routes/todo.route");
const userRouter = require("./src/routes/user.route");
const logger = require("./src/middlewares/logging.middleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

app.use("/todo", todoRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("<h1>REST API!!!</h1>");
});
dbConnect();
app.listen(5000, () => console.log("http://localhost:5000"));
