import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from 'components/Header/';

import { Home } from 'pages/Home';
import { Games } from 'pages/Games';
import { SignIn } from 'pages/SignIn';
import { SignUp } from 'pages/SignUp';

import * as S from './App.styles';

import 'normalize.css';

const App = () => {
  return (
    <Router>
      <S.GlobalStyle />
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/games' component={Games} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
