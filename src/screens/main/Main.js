import {createDrawerNavigator} from 'react-navigation-drawer';
import Recordings from '../recordings/Recordings';
import {VideoEditor} from '../VideoEditor';
import {Settings} from '../Settings';
import {Sdks} from '../Sdks';
import {TopClients} from '../TopClients';
import {ContactUs} from '../ContactUs';
import {About} from '../About';
import {Logs} from '../logs/Logs';
import DrawerMenu from './DrawerMenu';
import React from 'react';
import {CustomRecorder} from '../CustomRecorder';
import {CustomVideoPlayer} from '../CustomVideoPlayer';
import {BackToBackUploads} from "../backToBackUploads/BackToBackUploads";

export const Drawer = createDrawerNavigator(
  {
    Recordings: {screen: Recordings},
    CustomRecorder: {screen: CustomRecorder},
    CustomVideoPlayer: {screen: CustomVideoPlayer},
    VideoEditor: {screen: VideoEditor},
    BackToBackUploads: {screen: BackToBackUploads},
    Settings: {screen: Settings},
    ListSdks: {screen: Sdks},
    ListClients: {screen: TopClients},
    ContactUs: {screen: ContactUs},
    About: {screen: About},
    Logs: {screen: Logs},
  },
  {
    navigationOptions: {
      headerShown: false,
    },
    contentComponent: props => <DrawerMenu {...props} />,
  },
);
