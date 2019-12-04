import { compose } from 'redux';
import { connect } from 'react-redux';
import { Navigation } from './Navigation';

const mapStateToProps = (state) => ({
  currentUser: state.user.current,
});

const EnhancedNavigationContainer = compose(
  connect(mapStateToProps),
)(Navigation);

export { EnhancedNavigationContainer as NavigationContainer };
