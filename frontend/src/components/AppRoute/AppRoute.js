import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, useHistory, useLocation } from 'react-router-dom';

const AppRoute = ({ component: Component, path, ...rest }) => {
  const { state } = useLocation();
  const currentUser = useSelector(state => state.user.current);
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      if (state && state.goBack) {
        history.goBack();
      } else {
        history.push('/');
      }
    }
  }, [currentUser]);

  return (
    <Route
      {...rest}
      render={renderProps => <Component {...renderProps} />}
    ></Route>
  );
};

export { AppRoute };
