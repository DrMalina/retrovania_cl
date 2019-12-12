import { GAMES_FETCH, GAMES_FETCH_FAILURE, GAMES_FETCH_SUCCESS } from './types';

export const gamesFetchStart = () => ({
  type: GAMES_FETCH
});

export const gamesFetchSuccess = games => ({
  type: GAMES_FETCH_SUCCESS,
  payload: {
    games
  }
});

export const gamesFetchFailure = error => ({
  type: GAMES_FETCH_FAILURE,
  meta: {
    error
  }
});
