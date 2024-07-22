import { configLoader } from './env.loader';
import { envSchema } from './env.schema';
export const configOptions = {
  load: [configLoader],
  validationSchema: envSchema,
};
