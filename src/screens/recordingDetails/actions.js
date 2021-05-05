import Ziggeo from 'react-native-ziggeo-library';

export const Types = {
  LOADING: 'recd/LOADING',
  LOADED: 'recd/LOADED',
  EDIT: 'recd/EDIT',
  CANCEL: 'recd/CANCEL',
  ERROR: 'recd/ERROR',
};

const error = () => ({
  type: Types.ERROR,
});

const loading = () => ({
  type: Types.LOADING,
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

export const loadInfo = model => async dispatch => {
  dispatch(loading());
  Ziggeo.VideosApi.getImageUrl(model.token)
    .then(imageUrl => {
      dispatch(loaded(model, imageUrl));
    })
    .catch(dispatch(error()));
};

export const cancelEditing = () => async dispatch => {
  dispatch(cancel());
};

export const editInfo = () => async dispatch => {
  dispatch(edit());
};

export const updateInfo = model => async dispatch => {``
  dispatch(loading());
  Ziggeo.VideosApi.update(model.token, JSON.stringify(model)).then(upd => {
    console.log('updated')
    loadInfo();
  });
};

export const deleteVideo = (model, onSuccess) => async dispatch => {
  dispatch(loading());
  Ziggeo.VideosApi.destroy(model.token).then(() => {
    onSuccess();
  });
};
