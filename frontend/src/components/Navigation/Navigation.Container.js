import { compose } from 'redux';
import { connect } from 'react-redux';
import { Navigation } from './Navigation';
import { signOutReq } from '../../redux/users/utils';

const mapStateToProps = state => ({
  currentUser: state.user.current
});

const EnhancedNavigationContainer = compose(
  connect(
    mapStateToProps,
    {
      signOutReq
    }
  )
)(Navigation);

export { EnhancedNavigationContainer as NavigationContainer };
