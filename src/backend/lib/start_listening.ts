import { Express } from 'express';
import Logger from 'bunyan';

/**
 * Starts listening for incoming requests from Express
 * @param app
 */
export const startListening = (
  app: Express,
  port: number,
  log: Logger
): void => {
  app.listen(port, () => {
    log.info(`Application is listening at http://localhost:${port}`);
  });
};
