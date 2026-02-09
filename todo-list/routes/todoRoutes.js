import express from "express";
import {
  getAllTodos,
  getTodoById,
  createTodo
} from "../controllers/todoController.js";

import { validateTodo } from "../middleware/validateTodo.js";

const router = express.Router();

// GET /todo
router.get("/", getAllTodos);

// GET /todo/:id
router.get("/:id", getTodoById);

// POST /todo
router.post("/", validateTodo, createTodo);

export default router;
