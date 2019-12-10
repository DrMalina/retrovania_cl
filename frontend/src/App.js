import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from 'redux/store';

import { AppRoute } from 'components/AppRoute';
import { Footer } from 'components/Footer';
import { Navigation } from 'components/Navigation';

import { Home } from 'pages/Home';
import { Game } from 'pages/Game';
import { Games } from 'pages/Games';
import { SignIn } from 'pages/SignIn';
import { SignUp } from 'pages/SignUp';

import * as S from './App.styles';

import 'normalize.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <S.GlobalStyle />
        <Navigation />
        <main>
          <Switch>
            <AppRoute exact path='/' component={Home} />
            <AppRoute exact path='/games' component={Games} />
            <AppRoute path='/games/:id' component={Game} />
            <AppRoute path='/signin' component={SignIn} />
            <AppRoute path='/signup' component={SignUp} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
