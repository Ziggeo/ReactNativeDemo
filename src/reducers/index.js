import {combineReducers} from 'redux';
import AuthReducer from './AuthReducers';
import RecordingsReducers from './RecordingsReducers';

export default combineReducers({
  auth: AuthReducer,
});
