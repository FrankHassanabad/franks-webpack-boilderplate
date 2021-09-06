import { Request, Response } from 'express';
import { getEcho } from '../lib/echo_example';

/**
 * Simple sample echo route which given a request and response will
 * echo a simple JSON structure back to the client.
 * @param req The request object
 * @param res The response object
 */
export const echo = (req: Request, res: Response): void => {
  console.log('--> Input: ', req.body.input);
  res.send(getEcho(req.body.input));
};
