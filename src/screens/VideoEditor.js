import {StyleSheet, View} from 'react-native';
import React from 'react';

export class VideoEditor extends React.Component {
  render() {
    return <View style={styles.container} />;
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
