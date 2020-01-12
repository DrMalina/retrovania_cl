import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { AppRoute } from 'components/AppRoute';
import { Footer } from 'components/Footer';
import { Navigation } from 'components/Navigation';

import { Cart } from 'pages/Cart';
import { Home } from 'pages/Home';
import { Game } from 'pages/Game';
import { Games } from 'pages/Games';
import { SignIn } from 'pages/SignIn';
import { SignUp } from 'pages/SignUp';

import { reauthorize } from 'redux/users/utils';

import * as S from './App.styles';

import 'normalize.css';

const App = ({ currentUser, reauthorize }) => {
  useEffect(() => {
    if (!currentUser) {
      const token = JSON.parse(localStorage.getItem('token'));
      if (token) {
        reauthorize(token);
      }
    }
  }, [currentUser, reauthorize]);

  return (
    <Router>
      <S.GlobalStyle />
      <Navigation />
      <main>
        <Switch>
          <AppRoute exact path='/' component={Home} />
          <AppRoute path='/cart' component={Cart} requiresAuth={true} />
          <AppRoute exact path='/games' component={Games} />
          <AppRoute path='/games/:id' component={Game} />
          <AppRoute path='/signin' component={SignIn} />
          <AppRoute path='/signup' component={SignUp} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.current
});

export default connect(
  mapStateToProps,
  {
    reauthorize
  }
)(App);
