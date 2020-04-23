import React from 'react';
import {connect} from 'react-redux';
import {OutlinedTextField} from 'react-native-material-textfield';
import {View, ScrollView, Text, Linking, Image} from 'react-native';
import {Button} from 'react-native-elements';
import Routes from '../../Routes';
import Theme from '../../Theme';
import Strings from '../../Strings';
import Ziggeo from 'react-native-ziggeo-library';
import styles from './styles';
import {loginUser} from './actions';

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
      appToken: text,
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
                onChangeText={this.onTokenTextChange}
                value={appToken}
                error={tokenValidationError}
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

const mapStateToProps = ({auth}) => auth;

export default connect(
  mapStateToProps,
  {
    loginUser,
  },
)(Auth);
