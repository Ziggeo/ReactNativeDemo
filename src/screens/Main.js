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

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: Theme.size.commonMargin,
  },
  scrollContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: Theme.size.commonMargin,
  },
  logo: {
    height: 50,
    width: Theme.size.logoWidth,
    marginTop: Theme.size.logoMarginTop,
    marginBottom: Theme.size.logoMarginBottom,
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
)(Main);
