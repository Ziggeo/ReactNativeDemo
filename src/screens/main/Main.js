import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Strings from '../../Strings';
import {Recordings} from '../recordings/Recordings';
import {Settings} from '../Settings';
import {VideoEditor} from '../VideoEditor';
import {List} from '../List';
import {ContactUs} from '../ContactUs';
import {About} from '../About';
import {clients, sdks} from '../../assets/data';
import Ziggeo from 'react-native-ziggeo-library';
// import {Ionicons} from '@expo/vector-icons';
import DrawerMenu from './DrawerMenu';
import {connect} from 'react-redux';
import {
  loginPasswordChanged,
  loginUser,
  loginUsernameChanged,
} from '../../actions';

async function loadRecordings() {
  try {
    console.log('Ziggeo. loadRecordings');
    var value = await Ziggeo.VideosApi.index();
    //TODO
    console.log('Ziggeo. Value:' + value);
    return value;
  } catch (e) {
    console.log('Ziggeo. Error:' + e);
    //recorder error or recording was cancelled by user
    alert(e);
  }
}

const Drawer = createDrawerNavigator(
  {
    Recordings: {screen: Recordings(loadRecordings())},
    VideoEditor: {screen: VideoEditor},
    Settings: {screen: Settings},
    ListSdks: {screen: List(sdks)},
    ListClients: {screen: List(clients)},
    ContactUs: {screen: ContactUs},
    About: {screen: About},
  },
  {
    initialRouteName: Recordings.name,
    unmountInactiveRoutes: true,
    headerMode: 'none',
    contentComponent: props => <DrawerMenu {...props} />,
  },
);

export default connect()(Drawer);
