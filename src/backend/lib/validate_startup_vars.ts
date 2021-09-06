import * as fs from 'fs';
import { join } from 'path';

/**
 * The startup variables that are validated at startup.
 */
export type StartupVars = {
  port: number;
  staticDir: string;
};

/**
 * Validates a string port
 * @param port The string port to validate
 * @returns The port as a number if it is valid
 */
export const validatePort = (port: string | undefined): number => {
  if (port == null) {
    throw new TypeError(`"PORT" must be defined in the .env file`);
  } else {
    const convertedPort = +port;
    if (!isFinite(convertedPort)) {
      throw new TypeError(`PORT is not a valid number. Instead it is: ${port}`);
    }
    return convertedPort;
  }
};

/**
 * Validate static directory from the root of NodeJS
 * @param staticDir The static directory to validate which are relative from the root directory
 * @returns The validated static directory
 * @throws TypeError if it cannot validate the static directories
 */
export const validateStaticDir = (staticDir: string | undefined): string => {
  if (staticDir == null) {
    throw new TypeError('"STATIC_DIR" must be defined in the .env file');
  } else {
    const fullPath = join(__dirname, '../../..', staticDir);
    if (!fs.existsSync(fullPath)) {
      throw new TypeError(`The static directory ${fullPath} does not exist.`);
    }
    return staticDir;
  }
};

/**
 * Throws TypeError if it cannot validate the env
 * @param env The env to evaluate
 * @returns The validated variables as normal variables
 * @throws TypeError if it cannot validate the env
 */
export const validateStartupVars = (env: NodeJS.ProcessEnv): StartupVars => {
  return {
    port: validatePort(env['PORT']),
    staticDir: validateStaticDir(env['STATIC_DIR']),
  };
};
