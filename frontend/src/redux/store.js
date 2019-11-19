// dependencies:
import { applyMiddleware, compose, createStore } from 'redux';
// utilities/reducers:
import rootReducer from 'redux/rootReducer';

const INITIAL_STATE = { };
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [ ];

export const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(...middleware)),
);
