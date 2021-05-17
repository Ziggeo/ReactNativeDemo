import {NativeModules, StyleSheet, Text, View} from 'react-native';
import Strings from '../Strings';
import React from 'react';
import {Toolbar} from 'react-native-material-ui';
import Theme from '../Theme';
import ZiggeoCameraView from 'react-native-ziggeo-library/camera_view';
import ActionButton from 'react-native-action-button';
import {requestMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Platform} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import Ziggeo from 'react-native-ziggeo-library';

const ANDROID_PERMISSIONS = [
  PERMISSIONS.ANDROID.CAMERA,
  PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  PERMISSIONS.ANDROID.RECORD_AUDIO,
];
const IOS_PERMISSIONS = [];
const IS_ANDROID = Platform.OS === 'android';

export class CustomRecorder extends React.Component {
  constructor() {
    super();
    this.state = {
      isRecordingStarted: false,
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
    //     todo implement this in iOS module and uncomment:
    //     const cameraEmitter = Ziggeo.cameraViewEmitter();
    //     cameraEmitter.addListener('CameraOpened', data =>
    //       console.log('CameraOpened'),
    //     );
    //     cameraEmitter.addListener('CameraClosed', data =>
    //       console.log('CameraClosed'),
    //     );
    //
    //     cameraEmitter.addListener('RecordingStarted', data =>
    //       console.log('RecordingStarted'),
    //     );
    //     cameraEmitter.addListener('RecordingStopped', data =>
    //       console.log('RecordingStopped'),
    //     );
    //     cameraEmitter.addListener('StreamingStarted', data =>
    //       console.log('StreamingStarted'),
    //     );
    //     cameraEmitter.addListener('StreamingStopped', data =>
    //       console.log('StreamingStopped'),
    //     );
    //     cameraEmitter.addListener('error', data => console.log('error: ' + data));*/
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderToolbar()}
        {this.state.isPermissionsGranted && (
          <ZiggeoCameraView
            style={styles.container}
            ref={camRef => {
              this.camera = camRef;
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
    if (this.camera) {
      if (this.state.isRecordingStarted) {
        this.camera.stopRecording();
      } else {
        let path = IS_ANDROID
          ? RNFetchBlob.fs.dirs.DownloadDir + 'temp.mp4'
          : //TODO handle iOs path
            '';
        this.camera.startRecording(path, 10000);
      }
      this.setState({isRecordingStarted: !this.state.isRecordingStarted});
    }
  };

  requestPermissions() {
    requestMultiple(IS_ANDROID ? ANDROID_PERMISSIONS : IOS_PERMISSIONS).then(
      statuses => {
        if (IS_ANDROID) {
          let camera = statuses[PERMISSIONS.ANDROID.CAMERA];
          let write = statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE];
          let audio = statuses[PERMISSIONS.ANDROID.RECORD_AUDIO];

          let newState =
            camera === RESULTS.GRANTED &&
            write === RESULTS.GRANTED &&
            audio === RESULTS.GRANTED;

          if (newState !== this.state.isPermissionsGranted) {
            this.setState({
              isPermissionsGranted: newState,
            });
          }

          if (!this.state.isPermissionsGranted) {
            console.log('Permission denied.');
          }
        } else {
          this.setState({
            isPermissionsGranted: true, // todo check if we can get permission status in ios
          });
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
});
