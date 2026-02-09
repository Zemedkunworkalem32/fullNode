// In-memory user data
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Get all users
export const getAllUsers = (req, res) => {
    res.json(users);
};

// Get user by ID
export const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
};

// Create a new user
export const createUser = (req, res) => {
    const { name, email } = req.body;
    const id = users.length ? users[users.length - 1].id + 1 : 1;
    const newUser = { id, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
};

// Update user by ID
export const updateUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, email } = req.body;
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return res.status(404).json({ message: 'User not found' });
    users[index] = { id, name, email };
    res.json(users[index]);
};

// Delete user by ID
export const deleteUserById = (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return res.status(404).json({ message: 'User not found' });
    const deleted = users.splice(index, 1);
    res.json(deleted[0]);
};
