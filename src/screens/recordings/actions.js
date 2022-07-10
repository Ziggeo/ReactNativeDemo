import Ziggeo from 'react-native-ziggeo-library';

export const Types = {
    REQUEST_RECS: 'recs/REQUEST_RECS',
    RECEIVE_RECS: 'recs/RECEIVE_RECS',
    ERROR: 'recs/ERROR',
};
export const requestRecs = () => async dispatch => {
    dispatch({type: Types.REQUEST_RECS});

    let videoList;
    let audioList;
    let imageList;

    videoList = await Ziggeo.VideosApi.index().then((videos) => {
        return JSON.parse(videos);
    }).catch(reason => {
        dispatch(error(reason));
    });

    audioList = await Ziggeo.AudiosApi.index().then((videos) => {
        console.log("aaaaaaaa0");
        return JSON.parse(videos);
    }).catch(reason => {
        console.log("aaaaaaaa" );
        console.log( reason );
        dispatch(error(reason));
    });

    imageList = await Ziggeo.ImagesApi.index().then((videos) => {
        return JSON.parse(videos);
    }).catch(reason => {
        console.log("aaaaaaaa" + reason);
        dispatch(error(reason));
    });

    let comb = videoList.concat(audioList).concat(imageList);
    comb.sort(function (a, b) {
        return parseInt(b.created) - parseInt(a.created);
    });
    dispatch(receiveRecs(videoList));
};

export const receiveRecs = (videos) => ({
    type: Types.RECEIVE_RECS,
    payload: {videos},
});

export const error = reason => ({
    type: Types.ERROR,
    payload: reason,
});
