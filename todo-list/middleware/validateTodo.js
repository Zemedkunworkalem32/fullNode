import Joi from "joi";

const todoSchema = Joi.object({
  title: Joi.string().required(),
  completed: Joi.boolean()
});

export const validateTodo = (req, res, next) => {
  const { error } = todoSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};
