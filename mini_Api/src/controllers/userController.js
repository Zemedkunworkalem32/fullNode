import { users } from '../utils/dummyData.js';

// POST /users
export const createUser = (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

// GET /users/:id
export const getUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  const user = { id, username: 'John', email: 'john@test.com' };
  res.json(user);
};
