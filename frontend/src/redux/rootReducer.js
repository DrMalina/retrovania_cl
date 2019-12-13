import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from 'redux/cart/reducer';
import gameReducer from 'redux/game/reducer';
import gamesReducer from 'redux/games/reducer';
import usersReducer from 'redux/users/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user']
};

const rootReducer = combineReducers({
  cart: cartReducer,
  game: gameReducer,
  games: gamesReducer,
  user: usersReducer
});

export default persistReducer(persistConfig, rootReducer);
