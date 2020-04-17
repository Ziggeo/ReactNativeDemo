import {createDrawerNavigator} from 'react-navigation-drawer';
import Recordings from '../recordings/Recordings';
import {VideoEditor} from '../VideoEditor';
import {Settings} from '../Settings';
import {Sdks} from '../Sdks';
import {TopClients} from '../TopClients';
import {ContactUs} from '../ContactUs';
import {About} from '../About';
import DrawerMenu from './DrawerMenu';
import React from 'react';
import Routes from '../../Routes';

export const Drawer = createDrawerNavigator(
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
    contentComponent: props => <DrawerMenu {...props} />,
  },
);
