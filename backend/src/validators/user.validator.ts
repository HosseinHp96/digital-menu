import Joi from "joi";

export const loginUserValidationSchema = Joi.object({
  username: Joi.string().min(4).max(30).required(),
  password: Joi.string().min(5).max(50).required(),
});
