import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gameReducer from 'redux/game/reducer';
import gamesReducer from 'redux/games/reducer';
import usersReducer from 'redux/users/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  game: gameReducer,
  games: gamesReducer,
  user: usersReducer
});

export default persistReducer(persistConfig, rootReducer);
