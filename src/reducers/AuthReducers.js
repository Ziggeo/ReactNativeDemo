import {Auth} from '../actions/types';

const INITIAL_STATE = {
  tokenValidationError: '',
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Auth.VALIDATION_ERR:
      return {...state, tokenValidationError: action.payload};
    case Auth.LOGIN_SUCCESS:
      return {...state, user: action.payload};
    case Auth.USER_LOADED:
      return {...INITIAL_STATE, user: action.payload};
    case Auth.LOG_OUT:
      return {...INITIAL_STATE};
    default:
      return {...state};
  }
};
