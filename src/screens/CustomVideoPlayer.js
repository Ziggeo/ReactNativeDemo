import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import ZiggeoVideoView from 'react-native-ziggeo-library/video_view';
import {PERMISSIONS, requestMultiple, RESULTS} from 'react-native-permissions';
import Ziggeo from 'react-native-ziggeo-library';

const ANDROID_PERMISSIONS = [PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE];
const IOS_PERMISSIONS = [];
const IS_ANDROID = Platform.OS === 'android';

export class CustomVideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPermissionsGranted: false,
      model: this.props.navigation.state.params,
    };
  }

  componentDidMount() {
    if (!this.state.isPermissionsGranted) {
      this.requestPermissions();
    }
    this.subscribeForEvents();
  }

  subscribeForEvents() {
    const videoViewEmitter = Ziggeo.videoViewEmitter();
    videoViewEmitter.addListener('Error', data => console.log('Error' + data));
    videoViewEmitter.addListener('Playing', data => console.log('Playing'));
    videoViewEmitter.addListener('Paused', data => console.log('Paused'));
    videoViewEmitter.addListener('Ended', data => console.log('Ended'));
    videoViewEmitter.addListener('Seek', data => console.log('Seek'));
    videoViewEmitter.addListener('ReadyToPlay', data => {
      console.log('ReadyToPlay');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.isPermissionsGranted && this.state.model.videoPath && (
          <ZiggeoVideoView
            uris={[this.state.model.videoPath]}
            style={styles.player}
            ref={playerRef => {
              this.player = playerRef;
              this.onBtnPress();
            }}
          />
        )}
        {this.state.isPermissionsGranted && this.state.model.videoToken && (
          <ZiggeoVideoView
            tokens={[this.state.model.videoToken]}
            style={styles.player}
            ref={playerRef => {
              this.player = playerRef;
              this.onBtnPress();
            }}
          />
        )}
      </View>
    );
  }

  onBtnPress = () => {
    setTimeout(() => {
      if (this.player) {
        this.player.startPlaying();
      }
    }, 1000);
  };

  requestPermissions() {
    requestMultiple(IS_ANDROID ? ANDROID_PERMISSIONS : IOS_PERMISSIONS).then(
      statuses => {
        if (IS_ANDROID) {
          let write = statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE];

          let newState = write === RESULTS.GRANTED;

          if (newState !== this.state.isPermissionsGranted) {
            this.setState({
              isPermissionsGranted: newState,
            });
          }

          if (!this.state.isPermissionsGranted) {
            console.log('Permission denied.');
          }
        }
      },
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  player: {
    flex: 1,
  },
});
