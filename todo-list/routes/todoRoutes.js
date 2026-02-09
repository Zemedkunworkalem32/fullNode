import express from "express";
import { getAllTodos, getTodoById, createTodo } from "../controllers/todoController.js";
import { validateTodo } from "../middleware/validateTodo.js";

const router = express.Router();

router.get("/", getAllTodos);
router.get("/:id", getTodoById);
router.post("/", validateTodo, createTodo);

export default router;
