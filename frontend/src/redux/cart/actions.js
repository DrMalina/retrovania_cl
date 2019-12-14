import {
  CART_CLEANUP,
  CART_FETCH,
  CART_FETCH_FAILURE,
  CART_FETCH_SUCCESS,
  CART_ADD_ITEM,
  CART_REMOVE_ITEM
} from './types';

export const cartCleanup = () => ({
  type: CART_CLEANUP
});

export const cartFetchStart = () => ({
  type: CART_FETCH
});

export const cartFetchFailure = error => ({
  type: CART_FETCH_FAILURE,
  meta: {
    error
  }
});

export const cartFetchSuccess = cart => ({
  type: CART_FETCH_SUCCESS,
  payload: {
    cart
  }
});

export const cartAddItem = item => ({
  type: CART_ADD_ITEM,
  payload: {
    item
  }
});

export const cartRemoveItem = itemId => ({
  type: CART_REMOVE_ITEM,
  payload: {
    itemId
  }
});
