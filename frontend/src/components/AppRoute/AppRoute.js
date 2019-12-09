import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory } from 'react-router-dom';

const AppRoute = props => {
  const { component: Component, path, ...rest } = props;
  const currentUser = useSelector(state => state.user.current);
  const history = useHistory();

  if ((path === '/signin' || path === '/signup') && currentUser) {
    history.goBack();
  }

  return (
    <Route
      {...rest}
      render={renderProps => <Component {...renderProps} />}
    ></Route>
  );
};

export { AppRoute };
