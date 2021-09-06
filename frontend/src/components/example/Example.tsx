import React, { useEffect, useState } from 'react';
import { DataContract, echoApi } from './api';

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
  }, [echoApi]);

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
