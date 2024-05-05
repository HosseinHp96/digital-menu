import Joi from "joi";

export const shopValidationSchema = Joi.object({
  title: Joi.string().max(30).required(),
  description: Joi.string().max(2000).required(),
  currency: Joi.string().max(30).required(),
});
