const Joi = require('joi');

const taskSchema = Joi.object({
  name: Joi.string().min(3).required(),
  completed: Joi.boolean(),
});

module.exports.taskSchema = taskSchema;
