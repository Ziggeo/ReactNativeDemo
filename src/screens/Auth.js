import React from 'react';
import {connect} from 'react-redux';
import {OutlinedTextField} from 'react-native-material-textfield';
import {View, StyleSheet, ScrollView, Text, Linking, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {
  loginUsernameChanged,
  loginPasswordChanged,
  loginUser,
} from '../actions';
import Routes from '../Routes';
import Theme from '../Theme';
import Strings from '../Strings';
import Ziggeo from 'react-native-ziggeo-library';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = {
      scanQrMode: true,
    };
  }

  toggleVisibility() {
    this.setState({
      scanQrMode: !this.state.scanQrMode,
    });
  }

  onUseEnteredPressed = () => {
    let qr = this.state.qr;
    console.log(qr);
    Ziggeo.setAppToken(qr);
    const {navigation} = this.props;
    navigation.navigate(Routes.HomeStack);
  };

  onScanQrPress = () => {
    Ziggeo.startQrScanner();
    const recorderEmitter = Ziggeo.recorderEmitter();
    const subscription = recorderEmitter.addListener('QrDecoded', data => {
      Ziggeo.setAppToken(data.qr);
      const {navigation} = this.props;
      navigation.navigate(Routes.HomeStack);
    });
  };

  showToast = message => this.toast.show(message, 2000);

  static navigationOptions = {
    header: null,
  };

  async upload() {
    var appToken = 'd541dc6b1351d6424b04fb8415658e0d';
    Ziggeo.setAppToken(appToken);
    const recorderEmitter = Ziggeo.recorderEmitter();
    const subscription = recorderEmitter.addListener(
      'UploadProgress',
      progress =>
        console.log(
          progress.fileName +
            ' uploaded ' +
            progress.bytesSent +
            ' from ' +
            progress.totalBytes +
            ' total bytes',
        ),
    );
    try {
      //select and upload the video and return its token
      var argsMap = {
        max_duration: 15,
        enforce_duration: true,
        tags: 'TEST_TAG',
      };
      var token = await Ziggeo.uploadFromFileSelector(argsMap);
      console.log('Token:' + token);
      if (token) {
        Ziggeo.play(token);
      }
    } catch (e) {
      console.log('Error:' + e);
      //uploading error or upload was cancelled by user
      alert(e);
    }
  }
  async record() {
    var appToken = 'd541dc6b1351d6424b04fb8415658e0d';
    Ziggeo.setAppToken(appToken);
    Ziggeo.setCameraSwitchEnabled(true);
    Ziggeo.setCoverSelectorEnabled(false);
    Ziggeo.setCamera(Ziggeo.REAR_CAMERA);
    Ziggeo.setQuality(Ziggeo.HIGH_QUALITY);
    Ziggeo.setMaxRecordingDuration(600);
    var argsMap = {
      tags: 'test',
      expiration_days: 1,
      video_profile: '_video_profile_lightweight',
      auto_pad: true,
      data: '{"source":"app"}',
    };
    Ziggeo.setExtraArgsForRecorder(argsMap);
    const recorderEmitter = Ziggeo.recorderEmitter();
    const subscription = recorderEmitter.addListener(
      'UploadProgress',
      progress =>
        console.log(
          progress.fileName +
            ' uploaded ' +
            progress.bytesSent +
            ' from ' +
            progress.totalBytes +
            ' total bytes',
        ),
    );
    recorderEmitter.addListener('Verified', data =>
      console.log('Verified:' + data.token),
    );
    recorderEmitter.addListener('Processed', data =>
      console.log('Processed:' + data.token),
    );
    recorderEmitter.addListener('Processing', data =>
      console.log('Processing:' + data.token),
    );
    try {
      //record and upload the video and return its token
      var token = await Ziggeo.record();
      console.log('Token:' + token);
      if (token) {
        Ziggeo.play(token);
      }
    } catch (e) {
      console.log('Error:' + e);
      //recorder error or recording was cancelled by user
      alert(e);
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          <Image
            style={styles.logo}
            source={require('../assets/img/logo.png')}
            resizeMode="contain"
          />
          <Text style={styles.message}>
            {Strings.authMessagePart1}
            <Text
              style={{
                color: Theme.colors.accent,
                textDecorationLine: 'underline',
              }}
              onPress={() => {
                Linking.openURL('demo.ziggeo.com');
              }}>
              {Strings.authMessageLink}
            </Text>
            <Text>{Strings.authMessagePart2}</Text>
          </Text>
          <View style={styles.controls}>
            {!this.state.scanQrMode ? (
              <OutlinedTextField
                label={Strings.enterManuallyHint}
                onSubmitEditing={this.onSubmit}
                textColor={Theme.colors.accent}
                onChangeText={value => this.setState({qr: value})}
                value={this.state.qr}
              />
            ) : null}
          </View>
          {this.state.scanQrMode ? (
            <Button
              buttonStyle={styles.actionBtn}
              title={Strings.btnScanQrText}
              onPress={this.onScanQrPress}
            />
          ) : null}
          {!this.state.scanQrMode ? (
            <Button
              buttonStyle={styles.actionBtn}
              title={Strings.btnUseEnteredText}
              onPress={this.onUseEnteredPressed}
            />
          ) : null}
          {this.state.scanQrMode ? (
            <Button
              titleStyle={{color: Theme.colors.secondaryText}}
              buttonStyle={styles.stateSwitchBtn}
              title={Strings.enterQrManuallyText}
              onPress={this.toggleVisibility}
            />
          ) : null}
          {!this.state.scanQrMode ? (
            <Button
              titleStyle={{color: Theme.colors.secondaryText}}
              buttonStyle={styles.stateSwitchBtn}
              title={Strings.useScannerText}
              onPress={this.toggleVisibility}
            />
          ) : null}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Theme.size.commonMargin,
  },
  controls: {
    height: Theme.size.authControlsMarginTop,
    width: '100%',
    justifyContent: 'flex-end',
  },
  scrollContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: Theme.size.commonMargin,
  },
  logo: {
    height: 100,
    width: Theme.size.logoWidth,
    marginTop: Theme.size.logoMarginTop,
    marginBottom: Theme.size.logoMarginBottom,
  },
  message: {
    color: Theme.colors.secondaryText,
    textAlign: 'center',
    marginTop: Theme.size.commonMargin,
    marginBottom: Theme.size.commonMargin,
  },
  actionBtn: {
    marginTop: Theme.size.commonMargin,
    backgroundColor: Theme.colors.primary,
    height: Theme.size.btnQrHeight,
    width: Theme.size.btnQrWidth,
  },
  stateSwitchBtn: {
    marginTop: Theme.size.commonHalfMargin,
    backgroundColor: Theme.colors.transparent,
  },
});

const mapStateToProps = ({auth}) => auth;

export default connect(
  mapStateToProps,
  {
    loginUsernameChanged,
    loginPasswordChanged,
    loginUser,
  },
)(Auth);
