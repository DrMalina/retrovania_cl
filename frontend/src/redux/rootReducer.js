import { combineReducers } from 'redux';
import gamesReducer from 'redux/games/reducer';

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
