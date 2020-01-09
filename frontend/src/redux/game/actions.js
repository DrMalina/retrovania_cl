import {
  GAME_CLEANUP,
  GAME_FETCH,
  GAME_FETCH_FAILURE,
  GAME_FETCH_SUCCESS,
  GAME_UPDATE,
  GAME_UPDATE_SUCCESS,
  GAME_UPDATE_FAILURE
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

export const gameUpdateStart = () => ({
  type: GAME_UPDATE
});

export const gameUpdateSuccess = game => ({
  type: GAME_UPDATE_SUCCESS,
  payload: {
    game
  }
});

export const gameUpdateFailure = error => ({
  type: GAME_UPDATE_FAILURE,
  meta: {
    error
  }
});
