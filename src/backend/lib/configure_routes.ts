import express, { Express } from 'express';
import Logger from 'bunyan';
import { echo } from '../routes/echo';

/**
 * Configures the routes of your ExpressJS application.
 * @param app Express application
 * @param staticDir The static directory of your frontend application.
 * @param log The logger to log information
 */
export const configureRoutes = (
  app: Express,
  staticDir: string,
  log: Logger
): void => {
  app.use('/', express.static(staticDir));
  app.post('/api/echo', echo(log));
};
