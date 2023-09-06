import * as Joi from 'joi';
import { envConfiguration as env } from './env.configuration';

// define validation for all env variables
export const envValidationSchema = Joi.object({
  [env.NODE_ENV]: Joi.string()
    .trim()
    .valid('development', 'production', 'staging')
    .required(),
  [env.PORT]: Joi.number(),
  [env.CONNECTION_STRING_ATLAS]: Joi.string().required(),
});
