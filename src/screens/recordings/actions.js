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
            .then(data => {
                // result = videoList + imageList + audioList)
                let videos = JSON.parse(videoList);
                let audios = JSON.parse(audioList);
                let images = JSON.parse(imageList);
                let comb = videos.concat(audios).concat(images);
                comb.sort(function(a,b) {
                    return parseInt(a.created) - parseInt(b.created);
                });
                dispatch(receiveRecs(JSON.parse(videoList), JSON.parse(audioList), JSON.parse(imageList)));
            })
            .catch(reason => dispatch(error(reason)));
    }
;

export const receiveRecs = (videos, audios, images) => ({
    type: Types.RECEIVE_RECS,
    payload: {videos, audios, images},
});

export const error = reason => ({
    type: Types.ERROR,
    payload: reason,
});
