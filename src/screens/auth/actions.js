import {validateToken} from '../../utils/validators';
import {saveAppToken} from '../../utils/storage';

export const Types = {
  VALIDATION_ERR: 'auth/VALIDATION_ERR',
  LOGIN_SUCCESS: 'auth/LOGIN_SUCCESS',

  USER_LOADED: 'auth/USER_LOADED',
  LOG_OUT: 'auth/LOG_OUT',
};

export const loadUserIntoRedux = user => ({
  type: Types.USER_LOADED,
  payload: user,
});

export const loginUser = ({appToken, onSuccess}) => async dispatch => {
  const tokenValidator = validateToken(appToken);

  if (!tokenValidator.isValid) {
    dispatch({
      type: Types.VALIDATION_ERR,
      payload: tokenValidator.message,
    });
    return;
  }

  dispatch({
    type: Types.LOGIN_SUCCESS,
    payload: saveAppToken(appToken),
  });
  onSuccess();
};
