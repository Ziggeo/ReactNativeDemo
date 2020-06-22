import {StyleSheet, View} from 'react-native';
import React from 'react';
import Strings from '../Strings';
import HTML from 'react-native-render-html';
import toolbar from '../ui/Toolbar';
import Theme from '../Theme';

export class About extends React.Component {
  render() {
    return (
      <View style={{height: '100%'}}>
        {toolbar(Strings.titleAbout, this.props)}
        <View style={styles.container}>
          <HTML html={Strings.aboutSubtitle} />
          <HTML
            style={{fontSize: Theme.size.aboutTextSize}}
            html={Strings.aboutText}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
});
