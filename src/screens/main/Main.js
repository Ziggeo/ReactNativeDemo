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

const Drawer = createDrawerNavigator(
  {
    Recordings: {screen: Recordings},
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
