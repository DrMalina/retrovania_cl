import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Footer } from 'components/Footer';
import { Hero } from 'components/Hero';
import { Navigation } from 'components/Navigation';

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
      <Navigation />
      <Route exact path='/' component={Hero} />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/games' component={Games} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
