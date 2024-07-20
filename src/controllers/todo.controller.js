const mongoose = require("mongoose");
const TodoModel = require("../models/todos.model");

const getAllTodos = async (req, res) => {
  try {
    const todos = await TodoModel.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json(error);
  }
};

const addTodo = async (req, res) => {
  // const data = req.body
  // console.log(req.user);
  try {
    let todo = await TodoModel.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getTodoById = async (req, res) => {
  // const data = req.params
  try {
    const { id } = req.params;
    console.log(id);
    const todo = await TodoModel.find({ _id: id });
    if (todo.length > 0) {
      res.status(200).json(todo);
    } else {
      res
        .status(404)
        .json({ message: "Record not found. Check ID and try again." });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ message: "Invalid Id" });
    } else {
      res.status(500).json(error);
    }
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoModel.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: "Record not found" });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ message: "Invalid Id" });
    } else {
      res.status(500).json(error);
    }
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await TodoModel.findOneAndDelete({ _id: id });
    if (todo) {
      res.status(200).json(todo);
    } else {
      res.status(404).json({ message: "Record not found" });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ message: "Invalid Id" });
    } else {
      res.status(500).json(error);
    }
  }
};

const getTodoByUser = async (req, res) => {
  try {
    const { createdBy } = req.params;
    console.log(createdBy);
    const details = await TodoModel.find({ createdBy: createdBy });
    if (details.length > 0) {
      res.status(200).json(details);
    } else {
      res
        .status(404)
        .json({ message: "Record not found. Check ID and try again." });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).json({ message: "Invalid Id" });
    } else {
      res.status(500).json(error);
    }
  }
};

module.exports = {
  getAllTodos,
  addTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
  getTodoByUser,
};
