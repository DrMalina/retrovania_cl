import * as types from './types';

export const gamesFetchStart = () => ({
  type: types.GAMES_FETCH
});

export const gamesFetchSuccess = games => ({
  type: types.GAMES_FETCH_SUCCESS,
  payload: {
    games
  }
});

export const gamesFetchFailure = error => ({
  type: types.GAMES_FETCH_FAILURE,
  meta: {
    error
  }
});
