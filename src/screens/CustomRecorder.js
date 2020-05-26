import {StyleSheet, Text, View} from 'react-native';
import Strings from '../Strings';
import React from 'react';
import {Toolbar} from 'react-native-material-ui';
import Theme from '../Theme';
import ZiggeoCamera from 'react-native-ziggeo-library/CameraView';
import ActionButton from 'react-native-action-button';

export class CustomRecorder extends React.Component {
  constructor() {
    super();
    this.state = {
      isRecordingStarted: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderToolbar()}
        <ZiggeoCamera
          ref={camRef => {
            this.camera = camRef;
          }}
        />
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
