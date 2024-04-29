import Joi from "joi";

export const categoryValidationSchema = Joi.object({
  title: Joi.string().max(30).required(),
  position: Joi.number().min(1).required(),
  description: Joi.string().max(2000).required(),
  status: Joi.boolean().required(),
  faIcon: Joi.string().required(),
});
