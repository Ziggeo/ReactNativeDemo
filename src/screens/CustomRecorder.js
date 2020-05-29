import {StyleSheet, Text, View} from 'react-native';
import Strings from '../Strings';
import React from 'react';
import {Toolbar} from 'react-native-material-ui';
import Theme from '../Theme';
import ZiggeoCamera from 'react-native-ziggeo-library/CameraView';
import ActionButton from 'react-native-action-button';
import {
  requestMultiple,
  PERMISSIONS,
  RESULTS,
} from 'react-native-permissions';
import {Platform} from 'react-native';
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

  render() {
    return (
      <View style={styles.container}>
        {this.renderToolbar()}
        {this.state.isPermissionsGranted ? (
          <ZiggeoCamera
            ref={camRef => {
              this.camera = camRef;
            }}
          />
        ) : (
          this.requestPermissions()
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
        //TODO use real values
        this.camera.stopRecording("", 10000);
      } else {
        this.camera.startRecording();
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
