let todos = [
  { id: 1, title: "Learn Express", completed: false },
  { id: 2, title: "Do Homework", completed: true }
];

// GET /todos
export const getAllTodos = (req, res) => {
  res.status(200).json(todos);
};

// GET /todos/:id
export const getTodoById = (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(t => t.id === id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.status(200).json(todo);
};

// POST /todos
export const createTodo = (req, res) => {
  const { title, completed } = req.body;

  const newTodo = {
    id: todos.length + 1,
    title,
    completed: completed ?? false
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
};
