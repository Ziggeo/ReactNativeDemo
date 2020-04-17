import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {loadUserIntoRedux, logOutUser} from '../actions';
import {stGetUser} from '../utils/storage';
import Routes from '../Routes';
import Theme from '../Theme';

class Splash extends React.Component {
  componentDidMount() {
    this.loadUser();
  }

  loadUser = async () => {
    const {navigation} = this.props;
    const user = await stGetUser();

    if (user) {
      loadUserIntoRedux(user);
      navigation.navigate(Routes.HomeStack);
    } else {
      navigation.navigate(Routes.AuthStack);
    }
  };

  render() {
    return <View style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
});

const mapStateToProps = ({auth: {user}}) => ({user});

export default connect(
  mapStateToProps,
  {loadUserIntoRedux, logOutUser},
)(Splash);
