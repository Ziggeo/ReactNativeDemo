import {Types} from './actions';

const INITIAL_STATE = {
    tokenValidationError: '',
    user: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.VALIDATION_ERR:
            return {...state, tokenValidationError: action.payload};
        case Types.LOGIN_SUCCESS:
            return {...state, user: action.payload};
        case Types.USER_LOADED:
            return {...INITIAL_STATE, user: action.payload};
        case Types.LOG_OUT:
            return {...INITIAL_STATE};
        default:
            return {...state};
    }
};
