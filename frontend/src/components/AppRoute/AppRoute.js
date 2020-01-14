import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';

const AppRoute = ({
  component: Component, publicOnly = false, requiresAuth = false, ...rest
}) => {
  const { state } = useLocation();
  const currentUser = useSelector(state => state.user.current);
  const history = useHistory();

  useEffect(() => {
    if (requiresAuth && currentUser) {
      if (state && state.goBack) {
        history.goBack();
      } else {
        history.push('/');
      }
    }
  }, [currentUser, history, state]);

  if (publicOnly && currentUser) {
    return <Redirect to="/" />;
  }

  if (requiresAuth && !currentUser) {
    return <Redirect to='/signin' />;
  }

  console.log(state);

  return (
    <Route
      {...rest}
      render={renderProps => <Component {...renderProps} />}
    ></Route>
  );
};

export { AppRoute };
