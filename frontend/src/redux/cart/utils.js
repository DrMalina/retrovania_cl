import * as actions from 'redux/cart/actions';
import CartService from 'services/Cart';

export const cartFetch = () => async dispatch => {
  try {
    dispatch(actions.cartFetchStart());
    const cart = await CartService.fetch();
    dispatch(actions.cartFetchSuccess(cart));
  } catch (error) {
    dispatch(actions.cartFetchFailure(error));
  }
};

export const cartPersist = () => async dispatch => {
  try {
    dispatch(actions.cartPersistStart());
    await CartService.persist();
    dispatch(actions.cartPersistSuccess());
  } catch (error) {
    dispatch(actions.cartPersistFailure(error));
  }
};
