const express = require("express");

const {
  getAllTodos,
  addTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
  getTodoByUser,
} = require("../controllers/todo.controller");
const logger = require("../middlewares/logging.middleware");
const authenticateUser = require("../middlewares/auth.middleware");

const todoRouter = express.Router();

todoRouter.use(logger);

todoRouter.get("/", getAllTodos);
todoRouter.post("/", authenticateUser, addTodo);
todoRouter.get("/:id", getTodoById);
todoRouter.put("/:id", authenticateUser, updateTodo);
todoRouter.delete("/:id", authenticateUser, deleteTodo);
todoRouter.get("/details/:createdBy", authenticateUser, getTodoByUser);

module.exports = todoRouter;
