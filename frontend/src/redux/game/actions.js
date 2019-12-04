import * as types from './types';

export const gameFetchStart = () => ({
  type: types.GAME_FETCH
});

export const gameFetchSuccess = game => ({
  type: types.GAME_FETCH_SUCCESS,
  payload: {
    game
  }
});

export const gameFetchFailure = error => ({
  type: types.GAME_FETCH_FAILURE,
  meta: {
    error
  }
});
