/**
 * Type of the Echo.
 */
export type Echo = {
  text: string;
};

/**
 * Echos the input string.
 * @returns The input string as an echo.
 */
export const getEcho = (input: string): Echo => {
  return { text: input };
};
