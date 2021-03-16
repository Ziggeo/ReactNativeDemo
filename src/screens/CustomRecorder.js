import {StyleSheet, View, Platform} from 'react-native';
import React from 'react';
import {Toolbar} from 'react-native-material-ui';
import Ziggeo from 'react-native-ziggeo-library';
import ZiggeoCameraView from 'react-native-ziggeo-library/camera_view';
import {requestMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';
import RNFetchBlob from 'rn-fetch-blob';
import RecorderControlPanel from '../ui/RecorderControlPanel';
import Strings from '../Strings';
import Theme from '../Theme';

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
    const cameraEmitter = Ziggeo.cameraViewEmitter();
    cameraEmitter.addListener('CameraOpened', data =>
      console.log('CameraOpened'),
    );
    cameraEmitter.addListener('CameraClosed', data =>
      console.log('CameraClosed'),
    );

    cameraEmitter.addListener('RecordingStarted', data =>
      console.log('RecordingStarted'),
    );
    cameraEmitter.addListener('RecordingStopped', data =>
      console.log('RecordingStopped'),
    );
    cameraEmitter.addListener('StreamingStarted', data =>
      console.log('StreamingStarted'),
    );
    cameraEmitter.addListener('StreamingStopped', data =>
      console.log('StreamingStopped'),
    );
    cameraEmitter.addListener('error', data => console.log('error: ' + data));
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
        <View style={styles.controlPanelContainer}>
          <View style={styles.containerInner}>
            <RecorderControlPanel
              isRecording={false}
              onFlipCamera={this.onFlipPress}
            />
          </View>
        </View>
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
    position: 'relative',
  },
  controlPanelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 72,
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 16,
  },
  containerInner: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    position: 'relative',
    borderTopWidth: 2,
    borderTopColor: 'white',
  },
});
