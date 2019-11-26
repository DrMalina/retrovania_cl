import React from 'react';
import { ErrorImageLocal } from 'components/ErrorImageLocal';

const errorHandlerLocal = WrappedComponent => ({ error, ...props }) => {
  return error ? <ErrorImageLocal /> : <WrappedComponent {...props} />;
};

export { errorHandlerLocal };
