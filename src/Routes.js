import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './screens/Splash';
import Auth from './screens/auth/Auth';

import {Drawer} from './screens/main/Main';
import Routes from './Routes';

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
};

const AuthStack = createStackNavigator({
  [Routes.Auth]: {screen: Auth},
});

const HomeStack = createStackNavigator({
  [Routes.Drawer]: {screen: Drawer},
});

export const RootStack = createAppContainer(
  createSwitchNavigator({
    [Routes.Splash]: {screen: Splash},
    [Routes.AuthStack]: {screen: AuthStack},
    [Routes.HomeStack]: {screen: HomeStack},
  }),
);
