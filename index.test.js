import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

import {Tester, TestHookStore} from 'cavy';
import TestScreen from './TestScreen';
import TestSpec from './specs/TestSpec';

const testHookStore = new TestHookStore();

class AppWrapper extends Component {
  render() {
    return (
      <Tester
        specs={[TestSpec]}
        store={testHookStore}
        waitTime={1000}
        startDelay={3000}>
        <TestScreen />
      </Tester>
    );
  }
}

AppRegistry.registerComponent(appName, () => AppWrapper);
