import Ziggeo from 'react-native-ziggeo-library';

export const Types = {
  REQUEST_RECS: 'recs/REQUEST_RECS',
  RECEIVE_RECS: 'recs/RECEIVE_RECS',
};

export const requestRecs = page => ({
  type: Types.REQUEST_RECS,
  payload: page,
});

export const receiveRecs = json => ({
  type: Types.RECEIVE_RECS,
  payload: json,
});

export const fetchRecs = () => async dispatch => {
  //TODO
  console.log('Ziggeo. fetchRecs');
  // dispatch(requestRecs());
  // dispatch(receiveRecs(return Ziggeo.VideosApi.index().then(json => dispatch(receiveRecs(json)))));
};

export const fetchPosts = subreddit => dispatch => {
  //TODO
  console.log('Ziggeo. fetchPosts:' + subreddit);
  dispatch(requestRecs(subreddit));
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receiveRecs(json)));
};
