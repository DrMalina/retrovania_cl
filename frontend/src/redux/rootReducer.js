import { combineReducers } from 'redux';
import gamesReducer from 'redux/games/reducer';
import usersReducer from 'redux/users/reducer';

const rootReducer = combineReducers({
  games: gamesReducer,
  user: usersReducer
});

export default rootReducer;
