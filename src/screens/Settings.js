import {StyleSheet, Text, View} from 'react-native';
import Strings from '../Strings';
import React from 'react';

export const Settings = ({navigation}) => (
  <View style={styles.container}>
    <Text>{Strings.comingSoon}</Text>
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
