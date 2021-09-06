import { DataContract, echoApi } from './api';
import React, { useEffect, useState } from 'react';

/**
 * Example component.
 * @returns Example text for JSX element.
 */
export const Example = (): JSX.Element => {
  const [data, setData] = useState<DataContract>({
    isLoaded: false,
    data: null,
  });

  useEffect(() => {
    echoApi(setData);
  }, []);

  return (
    <>
      <div>
        <p>
          Example return from API is:
          <code>
            {data.isLoaded ? `${JSON.stringify(data.data)}` : 'Loading...'}
          </code>
        </p>
      </div>
    </>
  );
};
