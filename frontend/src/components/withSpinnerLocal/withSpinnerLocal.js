import React from 'react';
import { SpinnerLocal } from 'components/SpinnerLocal';

const withSpinnerLocal = WrappedComponent => ({ isLoading, ...props }) => {
  return isLoading ? <SpinnerLocal /> : <WrappedComponent {...props} />;
};

export { withSpinnerLocal };
