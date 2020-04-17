import {combineReducers} from 'redux';
import AuthReducer from './screens/auth/reducers';
import RecordingsReducer from './screens/recordings/reducers';
import DrawerReducer from './screens/main/reducers';

export default combineReducers({
  auth: AuthReducer,
  recs: RecordingsReducer,
  drawer: DrawerReducer,
});
