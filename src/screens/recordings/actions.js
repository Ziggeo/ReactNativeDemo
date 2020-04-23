import Ziggeo from 'react-native-ziggeo-library';

export const Types = {
  REQUEST_RECS: 'recs/REQUEST_RECS',
  RECEIVE_RECS: 'recs/RECEIVE_RECS',
  ERROR: 'recs/ERROR',
};
export const requestRecs = () => async dispatch => {
  dispatch({type: Types.REQUEST_RECS});
  await Ziggeo.VideosApi.index()
    .then(data => dispatch(receiveRecs(JSON.parse(data))))
    .catch(reason => dispatch(error(reason)));
};

export const receiveRecs = json => ({
  type: Types.RECEIVE_RECS,
  payload: json,
});

export const error = reason => ({
  type: Types.ERROR,
  payload: reason,
});
