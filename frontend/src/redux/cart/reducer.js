import * as types from './types';

const INITIAL_STATE = {
  current: [],
  error: null,
  loading: false
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CART_CLEANUP:
      return INITIAL_STATE;
    case types.CART_FETCH:
      return {
        ...state,
        loading: true
      };
    case types.CART_FETCH_FAILURE:
      return {
        ...state,
        current: null,
        error: action.meta.error,
        loading: false
      };
    case types.CART_FETCH_SUCCESS:
      return {
        ...state,
        current: action.payload.cart,
        error: null,
        loading: false
      };
    case types.CART_ADD_ITEM:
      return {
        ...state,
        current: state.current.concat([action.payload.item])
      };
    case types.CART_REMOVE_ITEM:
      return {
        ...state,
        current: state.current.filter(
          ({ _id }) => _id !== action.payload.itemId
        )
      };
    case types.CART_PERSIST:
    case types.CART_PERSIST_FAILURE:
    case types.CART_PERSIST_SUCCESS:
    default:
      return state;
  }
}
