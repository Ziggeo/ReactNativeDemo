import Ziggeo from 'react-native-ziggeo-library';

export const Types = {
  LOAD: 'recd/LOAD',
  LOADED: 'recd/LOADED',
  EDIT: 'recd/EDIT',
  CANCEL: 'recd/CANCEL',
  SAVE: 'recd/SAVE',
  DEFAULT: 'recd/DEFAULT',
};

const load = () => ({
  type: Types.LOAD,
});

const loaded = (model, imageUrl) => ({
  type: Types.LOADED,
  payload: {model, imageUrl},
});

const edit = () => ({
  type: Types.EDIT,
});

const cancel = () => ({
  type: Types.CANCEL,
});

const save = () => ({
  type: Types.SAVE,
});

export const loadInfo = model => async dispatch => {
  dispatch(load);
  Ziggeo.VideosApi.getImageUrl(model.token).then(imageUrl => {
    dispatch(loaded(model, imageUrl));
  });
};

export const cancelEditing = () => async dispatch => {
  dispatch(cancel());
};

export const editInfo = () => async dispatch => {
  dispatch(edit());
};

export const saveInfo = model => async dispatch => {
  dispatch(save());
  //TODO implement save
};
