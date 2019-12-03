import * as types from './types';

const INITIAL_STATE = {
  error: null,
  current: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SIGN_IN_INIT: {
      return { ...state, loading: true };
    }

    case types.SIGN_IN_SUCCESS: {
      return {
        ...state,
        error: null,
        current: action.payload,
        loading: false
      };
    }

    case types.SIGN_IN_FAILURE: {
      return {
        ...state,
        error: action.meta.error,
        current: null,
        loading: false
      };
    }

    case types.SIGN_OUT: {
      return; //TODO;
    }

    default: {
      return state;
    }
  }
};
