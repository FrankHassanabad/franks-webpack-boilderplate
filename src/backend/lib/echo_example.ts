import { Echo } from '../../shared/echo/types';

/**
 * Echos the input string.
 * @returns The input string as an echo.
 */
export const getEcho = (input: string): Echo => {
  return { text: input };
};
