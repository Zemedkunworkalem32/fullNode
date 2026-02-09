import express from 'express';
import {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} from '../controllers/userController.js';
import { validateUser } from '../middleware/validateUser.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', validateUser, createUser);      // Validate before creating
router.put('/:id', validateUser, updateUserById); // Validate before updating
router.delete('/:id', deleteUserById);

export default router;
