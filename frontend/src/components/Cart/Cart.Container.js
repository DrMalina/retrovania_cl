import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Cart } from './Cart';
import { errorHandlerLocal } from 'components/errorHandlerLocal';
import { SpinnerLocal } from 'components/SpinnerLocal';
import { cartRemoveItem } from 'redux/cart/actions';

const CartContainer = ({ cart, cartRemoveItem, isLoading }) => {
  return isLoading ? (
    <SpinnerLocal />
  ) : (
    <Cart cart={cart} removeItem={cartRemoveItem} />
  );
};

const mapStateToProps = state => ({
  cart: state.cart.current,
  error: state.cart.error,
  isLoading: state.cart.loading
});

const mapDispatchToProps = {
  cartRemoveItem
};

const EnhancedCartContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  errorHandlerLocal
)(CartContainer);

export { EnhancedCartContainer as CartContainer };
