import {Auth} from './types';
import {validateToken} from '../utils/validators';
import {stSaveUser, stRemoveUser} from '../utils/storage';
import Routes from '../Routes';

export const loadUserIntoRedux = user => ({
  type: Auth.USER_LOADED,
  payload: user,
});

export const logOutUser = navigation => dispatch => {
  stRemoveUser();
  navigation.navigate(Routes.AuthStack);
  dispatch({type: Auth.LOG_OUT});
};

export const loginUser = ({appToken, onSuccess}) => async dispatch => {
  const tokenValidator = validateToken(appToken);

  if (!tokenValidator.isValid) {
    dispatch({
      type: Auth.VALIDATION_ERR,
      payload: tokenValidator.message,
    });
    return;
  }

  dispatch({
    type: Auth.LOGIN_SUCCESS,
    payload: createUser({appToken}),
  });
  onSuccess();
};

// Local functions
const createUser = ({appToken}) => {
  const user = {appToken};
  stSaveUser(user);
  return user;
};
