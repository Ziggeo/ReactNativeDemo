import {Types} from './actions';

const INITIAL_STATE = {
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.REQUEST_RECS:
      return {...state, isLoading: true};
    case Types.RECEIVE_RECS:
      return {...state, isLoading: false, data: action.payload};
    default:
      return {...state};
  }
};
