import { compose } from 'redux';
import { connect } from 'react-redux';
import { Navigation } from './Navigation';
import { signOutReq } from 'redux/users/utils';

const mapStateToProps = state => ({
  currentUser: state.user.current,
  itemsInCart: state.cart.current.length
});

const mapDispatchToProps = {
  signOutReq
};

const EnhancedNavigationContainer = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Navigation);

export { EnhancedNavigationContainer as NavigationContainer };
