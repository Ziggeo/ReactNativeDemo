import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ZiggeoCameraView from 'react-native-ziggeo-library/camera_view';
import {PERMISSIONS, requestMultiple, RESULTS} from 'react-native-permissions';
import RNFetchBlob from 'rn-fetch-blob';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Theme from '../Theme';
import {getCustomVideoMode} from '../utils/storage';
import Routes from '../Routes';
import Ziggeo from 'react-native-ziggeo-library';

const ANDROID_PERMISSIONS = [
  PERMISSIONS.ANDROID.CAMERA,
  PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
  PERMISSIONS.ANDROID.RECORD_AUDIO,
];
const IOS_PERMISSIONS = [];
const IS_ANDROID = Platform.OS === 'android';

export class CustomRecorder extends React.Component {
  path: '';

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
        {this.state.isPermissionsGranted && (
          <ZiggeoCameraView
            style={styles.container}
            ref={camRef => {
              this.camera = camRef;
            }}
          />
        )}
        <View style={styles.btnContainer}>
          <View style={styles.btnPlayVideo}>
            <TouchableOpacity onPress={this.onPlayBtnPress}>
              <Icon
                size={Theme.size.iconSize}
                name={'play'}
                style={styles.overlay}
                color={
                  this.state.isRecordingStarted
                    ? Theme.colors.transparent
                    : Theme.colors.white
                }
              />
            </TouchableOpacity>
          </View>

          <View style={styles.btnPlayVideo}>
            <TouchableOpacity onPress={this.onBtnPress}>
              <Icon
                size={Theme.size.iconSize}
                name={(this.state.isRecordingStarted && 'pause') || 'video'}
                style={styles.overlay}
                color={Theme.colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  onPlayBtnPress = async () => {
    if (this.camera) {
      let isCustomMode = await getCustomVideoMode();
      if (isCustomMode === 'true') {
        const {navigation} = this.props;
        navigation.navigate(Routes.CustomVideo, {
          videoToken: null,
          videoPath: this.path,
        });
      } else {
        Ziggeo.playFromUri(this.path);
      }
    }
  };

  onBtnPress = () => {
    if (this.camera) {
      if (this.state.isRecordingStarted) {
        this.camera.stopRecording();
      } else {
        this.path = IS_ANDROID
          ? RNFetchBlob.fs.dirs.DownloadDir + Date.now() + 'temp.mp4'
          : //TODO handle iOs path
            '';
        this.camera.startRecording(this.path, 10000);
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
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
  },
  btnContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Theme.size.commonMargin,
  },
  btnPlayVideo: {
    marginRight: Theme.size.commonMargin,
    marginLeft: Theme.size.commonMargin,
    marginBottom: Theme.size.commonMargin,
    backgroundColor: Theme.colors.transparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
