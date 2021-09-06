import { Express } from 'express';
import { isFinite } from 'lodash/fp';

/**
 * Starts listening for incoming requests from Express
 * @param app
 */
export const startListening = (
  app: Express,
  port: string | undefined
): void => {
  if (port == null || !isFinite(+port)) {
    throw new RangeError(
      `Port must be defined and a valid number. Instead it is: ${port}`
    );
  }
  app.listen(port, () => {
    console.log(`Application is listening at http://localhost:${port}`);
  });
};
