import { Request, Response } from 'express';
import Logger from 'bunyan';
import { getEcho } from '../lib/echo_example';

/**
 * Return type of Echo
 */
type EchoReturnType = (req: Request, res: Response) => void;

/**
 * Simple sample echo route which given a request and response will
 * echo a simple JSON structure back to the client.
 * @param req The request object
 * @param res The response object
 */
export const echo = (log: Logger): EchoReturnType => {
  return (req: Request, res: Response) => {
    log.info('Input:', req.body.input);
    res.send(getEcho(req.body.input));
  };
};
