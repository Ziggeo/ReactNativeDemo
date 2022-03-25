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
  if (model.fileType === 'video') {
    Ziggeo.VideosApi.getImageUrl(model.model.token)
      .then(imageUrl => {
        dispatch(loaded(model, imageUrl));
      })
      .catch(dispatch(error()));
  }
  if (model.fileType === 'audio') {
    dispatch(loaded(model, null));
  }
  if (model.fileType === 'image') {
    Ziggeo.ImagesApi.getImagesUrl(model.model.token)
      .then(imageUrl => {
        dispatch(loaded(model, imageUrl));
      })
      .catch(dispatch(error()));
  }
};

export const cancelEditing = () => async dispatch => {
  dispatch(cancel());
};

export const editInfo = () => async dispatch => {
  dispatch(edit());
};

export const updateInfo = model => async dispatch => {
  dispatch(loading());
  if (model.fileType === 'video') {
    Ziggeo.VideosApi.update(model.model.token, JSON.stringify(model)).then(
      upd => {
        dispatch(loadInfo(model));
      },
    );
  }
  if (model.fileType === 'audio') {
    Ziggeo.AudiosApi.update(model.model.token, JSON.stringify(model)).then(
      upd => {
        dispatch(loadInfo(model));
      },
    );
  }
  if (model.fileType === 'image') {
    Ziggeo.ImagesApi.update(model.model.token, JSON.stringify(model)).then(
      upd => {
        dispatch(loadInfo(model));
      },
    );
  }
};

export const deleteVideo = (model, onSuccess) => async dispatch => {
  dispatch(loading());
  if (model.fileType === 'video') {
    Ziggeo.VideosApi.destroy(model.model.token).then(() => {
      onSuccess();
    });
  }
  if (model.fileType === 'audio') {
    Ziggeo.AudiosApi.destroy(model.model.token).then(() => {
      onSuccess();
    });
  }
  if (model.fileType === 'image') {
    Ziggeo.ImagesApi.destroy(model.model.token).then(() => {
      onSuccess();
    });
  }
};
