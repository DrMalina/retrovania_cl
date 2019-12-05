import { combineReducers } from 'redux';

import gameReducer from 'redux/game/reducer';
import gamesReducer from 'redux/games/reducer';
import usersReducer from 'redux/users/reducer';

const rootReducer = combineReducers({
  game: gameReducer,
  games: gamesReducer,
  user: usersReducer
});

export default rootReducer;
