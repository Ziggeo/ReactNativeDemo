import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from './screens/Splash';
import Auth from './screens/auth/Auth';

//TODO old screens, should be removed before release
import Header from './components/Header';
import Routes from './Routes';
import Main from './screens/main/Main';

export default {
  Splash: 'Splash',
  AuthStack: 'AuthStack',
  HomeStack: 'HomeStack',

  Auth: 'Auth',
  Main: 'Main',
  TestMain: 'TestMain',

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
