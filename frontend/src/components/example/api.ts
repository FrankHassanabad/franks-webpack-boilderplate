export type DataContract = { isLoaded: boolean; data: unknown | null };
export type SetData = (json: DataContract) => void;

/**
 * Example Echo API that sends the input "Hello World" and gets back the same string.
 * @param setData The call data to set
 */
export const echoApi = async (setData: SetData): Promise<void> => {
  const bodyMessage = {
    input: 'Hello World',
  };
  const response = await fetch('/api/echo', {
    method: 'POST',
    body: JSON.stringify(bodyMessage),
    headers: new Headers({ 'content-type': 'application/json' }),
  });
  const json = await response.json();
  setData({
    isLoaded: true,
    data: json,
  });
};
