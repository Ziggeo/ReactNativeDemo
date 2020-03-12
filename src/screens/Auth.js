import React from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import {OutlinedTextField} from 'react-native-material-textfield';
import {View, StyleSheet, ScrollView, Text, Linking} from 'react-native';
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

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          <FastImage
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
