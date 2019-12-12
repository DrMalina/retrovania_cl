import {
  GAME_CLEANUP,
  GAME_FETCH,
  GAME_FETCH_FAILURE,
  GAME_FETCH_SUCCESS
} from './types';

export const gameCleanup = () => ({
  type: GAME_CLEANUP
});

export const gameFetchStart = () => ({
  type: GAME_FETCH
});

export const gameFetchSuccess = game => ({
  type: GAME_FETCH_SUCCESS,
  payload: {
    game
  }
});

export const gameFetchFailure = error => ({
  type: GAME_FETCH_FAILURE,
  meta: {
    error
  }
});
