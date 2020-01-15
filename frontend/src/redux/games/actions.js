import {
  GAMES_CLEANUP,
  GAMES_FETCH,
  GAMES_FETCH_FAILURE,
  GAMES_FETCH_SUCCESS,
  GENRES_FETCH_FAILURE,
  GENRES_FETCH_SUCCESS
} from './types';

export const gamesCleanup = () => ({
  type: GAMES_CLEANUP
});

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

export const genresFetchSuccess = genres => ({
  type: GENRES_FETCH_SUCCESS,
  payload: {
    genres
  }
});

export const genresFetchFailure = error => ({
  type: GENRES_FETCH_FAILURE,
  meta: {
    error
  }
});
