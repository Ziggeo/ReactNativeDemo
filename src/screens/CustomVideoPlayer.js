import {NativeModules, StyleSheet, Text, View} from 'react-native';
import Strings from '../Strings';
import React from 'react';
import {Toolbar} from 'react-native-material-ui';
import Theme from '../Theme';
import ZiggeoVideoView from 'react-native-ziggeo-library/video_view';
import ActionButton from 'react-native-action-button';
import {requestMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Platform} from 'react-native';
import Ziggeo from 'react-native-ziggeo-library';

const ANDROID_PERMISSIONS = [PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE];
const IOS_PERMISSIONS = [];
const IS_ANDROID = Platform.OS === 'android';

export class CustomVideoPlayer extends React.Component {
  constructor() {
    super();
    this.state = {
      isPermissionsGranted: false,
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
    videoViewEmitter.addListener('ReadyToPlay', data =>
      console.log('ReadyToPlay'),
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderToolbar()}
        {this.state.isPermissionsGranted && (
          <ZiggeoVideoView
            // uris={['local_uri', 'remote_url']}
            tokens={['video_token1']}
            style={styles.player}
            ref={playerRef => {
              this.player = playerRef;
            }}
          />
        )}
        <ActionButton
          degrees={0}
          buttonTextStyle={{fontSize: Theme.size.btnStartStopTextSize}}
          buttonText={
            this.state.isRecordingStarted
              ? Strings.btnStopText
              : Strings.btnStartText
          }
          buttonColor="rgba(231,76,60,1)"
          onPress={this.onBtnPress}
        />
      </View>
    );
  }

  onBtnPress = () => {
    if (this.player) {
      this.player.startPlaying();
    }
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

  renderToolbar() {
    return (
      <Toolbar
        style={{container: {backgroundColor: Theme.colors.primary}}}
        onLeftElementPress={() => this.props.navigation.openDrawer()}
        leftElement="menu"
        centerElement={Strings.titleCustomRecorder}
      />
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
