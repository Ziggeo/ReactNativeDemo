import React from "react";
import {AppRegistry, SafeAreaView} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Theme from "./src/Theme";

const SafeAreaApp = () => (
    <>
        <SafeAreaView style={{flex: 0, backgroundColor: Theme.colors.background }}/>
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
            <App/>
        </SafeAreaView>
    </>
)

AppRegistry.registerComponent(appName, () => SafeAreaApp);
