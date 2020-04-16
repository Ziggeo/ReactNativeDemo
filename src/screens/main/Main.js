import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Recordings} from '../recordings/Recordings';
import {Settings} from '../Settings';
import {VideoEditor} from '../VideoEditor';
import {ContactUs} from '../ContactUs';
import {About} from '../About';
import Ziggeo from 'react-native-ziggeo-library';
// import {Ionicons} from '@expo/vector-icons';
import DrawerMenu from './DrawerMenu';
import {connect} from 'react-redux';
import {TopClients} from '../TopClients';
import {Sdks} from '../Sdks';

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
    ListSdks: {screen: Sdks},
    ListClients: {screen: TopClients},
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
