export const validateTodo = (req, res, next) => {
  const todoData = req.body;

  // Validate
  if (!todoData.task) {
    return res.status(400).json({
      error: "Task is required"
    });
  }

  next();
};
