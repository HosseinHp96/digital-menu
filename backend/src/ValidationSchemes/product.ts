import Joi from "joi";

export const addProductValidationSchema = Joi.object({
  title: Joi.string().max(30).required(),
  price: Joi.number().min(0).required(),
  position: Joi.number().min(1).required(),
  description: Joi.string().max(2000).required(),
  status: Joi.boolean().required(),
  category: Joi.required(),
});
