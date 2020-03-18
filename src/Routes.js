import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  StackActions,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Splash from './screens/Splash';
import About from './screens/About';
import AvailableSDKs from './screens/AvailableSDKs';
import VideoEdit from './screens/VideoEditor';
import TopClients from './screens/TopClients';
import ContactUs from './screens/ContactUs';
import Auth from './screens/Auth';
import RecordingDetails from './screens/recordings/RecordingDetails';
import Recordings from './screens/recordings/Recordings';

//TODO old screens, should be removed before release
import Browse from './screens/old/Browse';
import Explore from './screens/old/Explore';
import Library from './screens/old/Library';
import Settings from './screens/old/Settings';
import MoviesListScreen from './screens/old/Movie/MoviesListScreen';
import MovieDetailsScreen from './screens/old/Movie/MovieDetailsScreen';

import NavbarWrapper from './components/NavbarWrapper';
import NavbarButtonWrapper from './components/NavbarButtonWrapper';
import Header from './components/Header';
import {
  getNavbarBrowseIcon,
  getNavbarExploreIcon,
  getNavbarLibraryIcon,
} from './utils/icons';
import {getFontStyleObject} from './utils/font';
import {fromRightWithFade} from './utils/navigation';
import Routes from './Routes';
import Theme from './Theme';
import Main from './screens/Main';

export default {
  Splash: 'Splash',
  AuthStack: 'AuthStack',
  HomeStack: 'HomeStack',

  Auth: 'Auth',
  Main: 'Main',

  Settings: 'Settings',
  MovieListScreen: 'MoviesListScreen',
  MovieDetailsScreen: 'MovieDetailsScreen',

  BottomTabs: 'BottomTabs',
};

const defaultHeaderObject = {
  header: props => <Header scene={props.scene} />,
};

const createDefaultStackNavigator = (screensObject, customOptions) =>
  createStackNavigator(screensObject, {
    defaultNavigationOptions: {...defaultHeaderObject},
    cardStyle: {
      backgroundColor: '#000',
    },
    headerMode: 'screen',
    transitionConfig: () => fromRightWithFade(),
    ...customOptions,
  });

const AuthStack = createDefaultStackNavigator({
  [Routes.Auth]: {screen: Auth},
});

const HomeStack = createStackNavigator({
  [Routes.Main]: {screen: Main},
});

export const RootStack = createAppContainer(
  createSwitchNavigator({
    [Routes.Splash]: {screen: Splash},
    [Routes.AuthStack]: {screen: AuthStack},
    [Routes.HomeStack]: {screen: HomeStack},
  }),
);
