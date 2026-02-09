let todos = [
  {
    id: 1,
    task: "Learn Express",
    completed: false,
    priority: "high",
    createdAt: new Date().toISOString()
  },
  {
    id: 2,
    task: "Do homework",
    completed: true,
    priority: "medium",
    createdAt: new Date().toISOString()
  }
];

// GET /todo
export const getAllTodos = (req, res) => {
  res.status(200).json({
    message: "Todos fetched successfully",
    todos: todos
  });
};

// GET /todo/:id
export const getTodoById = (req, res) => {
  const todoId = parseInt(req.params.id);

  const foundTodo = todos.find(todo => todo.id === todoId);

  if (!foundTodo) {
    return res.status(404).json({
      error: "Todo not found"
    });
  }

  res.status(200).json({
    message: "Todo fetched successfully",
    todo: foundTodo
  });
};

// POST /todo
export const createTodo = (req, res) => {
  const todoData = req.body;

  // Store (in memory)
  const storedTodo = {
    id: Date.now(),
    task: todoData.task,
    completed: todoData.completed || false,
    priority: todoData.priority || "medium",
    createdAt: new Date().toISOString()
  };

  todos.push(storedTodo);

  // Respond
  res.status(201).json({
    message: "Todo created successfully",
    todo: storedTodo
  });
};
