import express from 'express';
import Joi from 'joi';

import { createUser, getUserById } from '../controllers/userController.js';
import { validate } from '../middleware/validate.js';

const router = express.Router();

const userSchema = Joi.object({
  username: Joi.string().min(3).required(),
  email: Joi.string().email().required()
});

router.post('/', validate(userSchema), createUser);
router.get('/:id', getUserById);

export default router;
