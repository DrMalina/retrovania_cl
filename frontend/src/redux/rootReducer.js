// dependencies:
import { combineReducers } from 'redux';
// utilities/reducers:
import placeholderReducer from 'redux/placeholder/placeholderReducer';

const rootReducer = combineReducers({
  placeholder: placeholderReducer,
});

export default rootReducer;
