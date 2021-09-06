import { Express, json, urlencoded } from 'express';

/**
 * Configures all the middelware for the express app.
 * @param app The Express app.
 */
export const configureMiddleware = (app: Express): void => {
  app.use(json({}));
  app.use(urlencoded({ extended: true }));
};
