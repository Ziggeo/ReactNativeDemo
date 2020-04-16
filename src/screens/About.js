import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Strings from '../Strings';
import HTML from 'react-native-render-html';

export class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HTML html={Strings.aboutSubtitle} />
        <HTML style={{fontSize: 16}} html={Strings.aboutText} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center',
    flex: 1,
  },
});
