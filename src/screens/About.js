import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Strings from '../Strings';
import HTML from 'react-native-render-html';

const htmlContent = `
    <h1>This HTML snippet is now rendered with native components !</h1>
    <h2>Enjoy a webview-free and blazing fast application</h2>
    <img src="https://i.imgur.com/dHLmxfO.jpg?2" />
    <em style="textAlign: center;">Look at how happy this native cat is</em>
`;

export const About = ({navigation}) => (
  <View style={styles.container}>
    <HTML html={Strings.aboutSubtitle} />
    <HTML style={{fontSize: 16}} html={Strings.aboutText} />
    {/*<HTML html={htmlContent} />*/}
  </View>
);
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center',
    flex: 1,
  },
});
