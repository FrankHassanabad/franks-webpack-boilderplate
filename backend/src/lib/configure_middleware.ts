import { Express, json, urlencoded } from 'express';

// configure ExpressJS middleware
export const configureMiddleware = (app: Express) => {
  app.use(json({}));
  app.use(urlencoded({ extended: true }));
};
