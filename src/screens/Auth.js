import React from 'react';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import Reinput from 'reinput';
import {View, StyleSheet, ScrollView, Text, Linking} from 'react-native';
import {Button} from 'react-native-elements';
import {
  loginUsernameChanged,
  loginPasswordChanged,
  loginUser,
} from '../actions';
import RouteNames from '../RouteNames';
import Theme from '../Theme';
import Strings from '../Strings';

class AuthLogin extends React.Component {
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

  onScanQrPress = () => {
    const {loginUsername, loginPassword, navigation} = this.props;

    this.props.loginUser({
      username: loginUsername,
      password: loginPassword,
      showToast: this.showToast,
      onSuccess: () => {
        navigation.navigate(RouteNames.HomeStack);
      },
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
          <Button
            buttonStyle={{
              backgroundColor: Theme.colors.primary,
              marginTop: Theme.spacing.authControlsMarginTop,
            }}
            title={Strings.btnScanQrText}
            onPress={this.onScanQrPress}
          />
          {this.state.scanQrMode ? (
            <Button
              titleStyle={{color: Theme.colors.secondaryText}}
              buttonStyle={{backgroundColor: Theme.colors.transparent}}
              title={Strings.enterQrManuallyText}
              onPress={this.toggleVisibility}
            />
          ) : null}
          {!this.state.scanQrMode ? (
            <Button
              titleStyle={{color: Theme.colors.secondaryText}}
              buttonStyle={{backgroundColor: Theme.colors.transparent}}
              title={Strings.useScannerText}
              onPress={this.toggleVisibility}
            />
          ) : null}
          {!this.state.scanQrMode ? (
            <Reinput
              label={Strings.enterManuallyHint}
              color={Theme.colors.accent}
              activeColor={Theme.colors.accent}
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
  },
  scrollContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: Theme.spacing.commonMargin,
  },
  logo: {
    height: 100,
    width: Theme.spacing.logoWidth,
    marginTop: Theme.spacing.logoMarginTop,
    marginBottom: Theme.spacing.logoMarginBottom,
  },
  message: {
    color: Theme.colors.secondaryText,
    textAlign: 'center',
    marginTop: Theme.spacing.commonMargin,
    marginBottom: Theme.spacing.commonMargin,
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
)(AuthLogin);
