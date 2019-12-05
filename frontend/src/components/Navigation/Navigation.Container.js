import { compose } from 'redux';
import { connect } from 'react-redux';
import { Navigation } from './Navigation';
import { deauthenticate } from '../../redux/users/utils';

const mapStateToProps = state => ({
  currentUser: state.user.current
});

const EnhancedNavigationContainer = compose(
  connect(
    mapStateToProps,
    {
      deauthenticate
    }
  )
)(Navigation);

export { EnhancedNavigationContainer as NavigationContainer };
