import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './screens/Splash';
import Auth from './screens/auth/Auth';
import RecordingDetails from './screens/recordingDetails/RecordingDetails';

import {Drawer} from './screens/main/Main';
import Routes from './Routes';
import {Settings} from './screens/Settings';
import {CustomRecorder} from './screens/CustomRecorder';
import {CustomVideoPlayer} from './screens/CustomVideoPlayer';

export default {
  Splash: 'Splash',
  AuthStack: 'AuthStack',
  HomeStack: 'HomeStack',
  RecStack: 'RecStack',

  Auth: 'Auth',
  Drawer: 'Drawer',

  Recordings: 'Recordings',
  RecordingDetails: 'RecordingDetails',

  Settings: 'Settings',
  CustomVideo: 'CustomVideo',
  CustomCamera: 'CustomCamera',
};

const AuthStack = createStackNavigator({
  [Routes.Auth]: {screen: Auth},
});

const HomeStack = createStackNavigator({
  [Routes.Drawer]: {screen: Drawer},
  [Routes.RecordingDetails]: {screen: RecordingDetails},
  [Routes.CustomVideo]: {screen: CustomVideoPlayer},
  [Routes.CustomCamera]: {screen: CustomRecorder},
});

export const RootStack = createAppContainer(
  createSwitchNavigator({
    [Routes.Splash]: {screen: Splash},
    [Routes.AuthStack]: {screen: AuthStack},
    [Routes.HomeStack]: {screen: HomeStack},
  }),
);
