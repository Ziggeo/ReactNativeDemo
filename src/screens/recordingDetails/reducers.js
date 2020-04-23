import {Types} from './actions';

const INITIAL_STATE = {
  isLoading: false,
  editMode: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD:
      return {...state, isLoading: true};
    case Types.LOADED:
      return {
        ...state,
        isLoading: false,
        model: action.payload.model,
        imageUrl: action.payload.imageUrl,
      };
    case Types.SAVE:
      return {...state, isLoading: true};
    case Types.EDIT:
      return {...state, editMode: true};
    default:
      return {...state};
  }
};
