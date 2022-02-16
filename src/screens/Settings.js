import {ScrollView, StyleSheet, Switch, View} from 'react-native';
import Strings from '../Strings';
import React from 'react';
import createToolbar from '../ui/Toolbar';
import Theme from '../Theme';
import createButton from '../ui/Button';
import Text from '../ui/Text';
import {
  getBlurMode,
  getCustomCameraMode,
  getCustomVideoMode, saveBlurMode,
  saveCustomCameraMode,
  saveCustomVideoMode,
} from '../utils/storage';
import {textFontStyle} from '../ui/textFontStyle';

export class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.onBtnSaveSettingsPressed = this.onBtnSaveSettingsPressed.bind(this);
    this.state = {
      isCustomCamera: false,
      isCustomVideo: false,
      isBlurMode: false,
    };
  }

  componentDidMount() {
    this.loadCustomModeData();
  }

  loadCustomModeData = async () => {
    let isCustomCamera = await getCustomCameraMode();
    let isCustomVideo = await getCustomVideoMode();
    let isBlurMode = await getBlurMode();

    if (isCustomCamera !== null) {
      this.setState({isCustomCamera});
    }
    if (isCustomVideo !== null) {
      this.setState({isCustomVideo});
    }
    if (isBlurMode !== null) {
      this.setState({isBlurMode});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {createToolbar(Strings.titleSettings, this.props)}
        <ScrollView>
          <View style={styles.textContainer}>
            <Text
              style={[
                textFontStyle.textStyle,
                {
                  fontSize: Theme.size.toolbarTextSize,
                },
              ]}>
              {Strings.customVideoMode}
            </Text>
            <Switch
              value={this.state.isCustomVideo}
              onValueChange={isCustomVideo => {
                this.setState({isCustomVideo});
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text
              style={[
                textFontStyle.textStyle,
                {
                  fontSize: Theme.size.toolbarTextSize,
                },
              ]}>
              {Strings.customCameraMode}
            </Text>
            <Switch
              value={this.state.isCustomCamera}
              onValueChange={isCustomCamera => {
                this.setState({isCustomCamera});
              }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text
              style={[
                textFontStyle.textStyle,
                {
                  fontSize: Theme.size.toolbarTextSize,
                },
              ]}>
              {Strings.blurMode}
            </Text>
            <Switch
              value={this.state.isBlurMode}
              onValueChange={isBlurMode => {
                this.setState({isBlurMode});
              }}
            />
          </View>
        </ScrollView>
        {createButton(
          Strings.saveSettings,
          this.onBtnSaveSettingsPressed,
          styles.btnSaveSettings,
        )}
      </View>
    );
  }

  onBtnSaveSettingsPressed() {
    saveCustomCameraMode(this.state.isCustomCamera);
    saveCustomVideoMode(this.state.isCustomVideo);
    saveBlurMode(this.state.isBlurMode);
  }
}

const styles = StyleSheet.create({
  container: {height: '100%', justifyContent: 'space-between'},
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Theme.size.commonMargin,
    marginRight: Theme.size.commonMargin,
    marginLeft: Theme.size.commonMargin,
  },
  btnSaveSettings: {
    marginRight: Theme.size.commonMargin,
    marginLeft: Theme.size.commonMargin,
    marginBottom: Theme.size.commonMargin,
    backgroundColor: Theme.colors.primary,
    height: Theme.size.btnQrHeight,
  },
});
