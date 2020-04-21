import Ziggeo from 'react-native-ziggeo-library';

export const Types = {
  REQUEST_RECS: 'recs/REQUEST_RECS',
  RECEIVE_RECS: 'recs/RECEIVE_RECS',
};
export const requestRecs = page => async dispatch => {
  dispatch({type: Types.REQUEST_RECS, payload: page});
  await Ziggeo.VideosApi.index().then(data =>
    dispatch(receiveRecs(JSON.parse(data))),
  );
};

export const receiveRecs = json => ({
  type: Types.RECEIVE_RECS,
  payload: json,
});
