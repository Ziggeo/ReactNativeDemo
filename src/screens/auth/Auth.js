import React from 'react';
import {connect} from 'react-redux';
import {Image, Linking, ScrollView, View} from 'react-native';
import Routes from '../../Routes';
import Theme from '../../Theme';
import Strings from '../../Strings';
import Ziggeo from 'react-native-ziggeo-library';
import styles from './styles';
import {loginUser} from './actions';
import Text from '../../ui/Text';
import createButton from '../../ui/Button';
import createTextField from '../../ui/TextField';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.onTokenTextChange = this.onTokenTextChange.bind(this);
    this.state = {
      scanQrMode: true,
      appToken: '',
    };
  }

  toggleVisibility() {
    this.setState({
      scanQrMode: !this.state.scanQrMode,
    });
  }

  onTokenTextChange(text) {
    this.setState({
      appToken: text.trim(),
    });
  }

  onUseEnteredPressed = () => {
    const {appToken} = this.state;
    this.props.loginUser({
      appToken,
      onSuccess: () => {
        Ziggeo.setAppToken(appToken);
        const {navigation} = this.props;
        navigation.navigate(Routes.HomeStack);
      },
    });
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

  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const {appToken} = this.state;
    const {tokenValidationError} = this.props;
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContentContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/img/logo.png')}
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
                Linking.openURL('https://demo.ziggeo.com');
              }}>
              {Strings.authMessageLink}
            </Text>
            <Text>{Strings.authMessagePart2}</Text>
          </Text>
          <View style={styles.controls}>
            {!this.state.scanQrMode
              ? createTextField({
                  label: Strings.enterManuallyHint,
                  onSubmitEditing: this.onSubmit,
                  textColor: Theme.colors.accent,
                  value: appToken,
                  onChangeText: this.onTokenTextChange,
                  error: tokenValidationError,
                })
              : null}
          </View>
          {this.state.scanQrMode
            ? createButton(
                Strings.btnScanQrText,
                this.onScanQrPress,
                styles.actionBtn,
              )
            : null}
          {!this.state.scanQrMode
            ? createButton(
                Strings.btnUseEnteredText,
                this.onUseEnteredPressed,
                styles.actionBtn,
              )
            : null}
          {this.state.scanQrMode
            ? createButton(
                Strings.enterQrManuallyText,
                this.toggleVisibility,
                styles.stateSwitchBtn,
                {color: Theme.colors.secondaryText},
              )
            : createButton(
                Strings.useScannerText,
                this.toggleVisibility,
                styles.stateSwitchBtn,
                {color: Theme.colors.secondaryText},
              )}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = ({auth}) => auth;

export default connect(
  mapStateToProps,
  {
    loginUser,
  },
)(Auth);
