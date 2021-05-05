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

        await Ziggeo.VideosApi.index()
            .then(videos => {
                    videoList = videos;
                    return Ziggeo.AudiosApi.index();
                }
            )
            .then(audios => {
                audioList = audios;
                return Ziggeo.ImagesApi.index();
            })
            .then(images => imageList = images)
            .then(() => {
                let videos = JSON.parse(videoList);
                let audios = JSON.parse(audioList);
                let images = JSON.parse(imageList);
                let comb = videos.concat(audios).concat(images);
                comb.sort(function (a, b) {
                    return parseInt(b.created) - parseInt(a.created);
                });
                dispatch(receiveRecs(comb));
            })
            .catch(reason => dispatch(error(reason)));
    }
;

export const receiveRecs = (videos) => ({
    type: Types.RECEIVE_RECS,
    payload: {videos},
});

export const error = reason => ({
    type: Types.ERROR,
    payload: reason,
});
