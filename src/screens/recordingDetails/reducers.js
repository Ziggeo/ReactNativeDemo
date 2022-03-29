import {Types} from './actions';

const INITIAL_STATE = {
  isLoading: false,
  isEditMode: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOADING:
      return {INITIAL_STATE, isLoading: true};
    case Types.LOADED:
      return {
        INITIAL_STATE,
        isLoading: false,
        model: action.payload.model,
        imageUrl: action.payload.imageUrl,
      };
    case Types.EDIT:
      return {...state, isEditMode: true};
    case Types.CANCEL:
      return {...state, isEditMode: false};
    case Types.ERROR:
      return {INITIAL_STATE};
    default:
      return {...state};
  }
};
