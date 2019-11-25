import { combineReducers } from 'redux';
import placeholderReducer from 'redux/placeholder/placeholderReducer';

const rootReducer = combineReducers({
  placeholder: placeholderReducer,
});

export default rootReducer;
