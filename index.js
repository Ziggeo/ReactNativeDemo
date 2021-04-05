import React from "react";
import {AppRegistry, SafeAreaView} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

const SafeAreaApp = () => <SafeAreaView style={{ flex: 1 }}><App/></SafeAreaView>

AppRegistry.registerComponent(appName, () => SafeAreaApp);
