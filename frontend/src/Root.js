import React from 'react';
// dependencies:
import { Provider } from 'react-redux';
// utilities:
import { store } from 'redux/store';

const Root = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default Root;
