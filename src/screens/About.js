import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Strings from '../Strings';
import HTML from 'react-native-render-html';
import {Toolbar} from 'react-native-material-ui';
import Theme from '../Theme';

export class About extends React.Component {
  renderToolbar() {
    return (
      <Toolbar
        style={{container: {backgroundColor: Theme.colors.primary}}}
        onLeftElementPress={() => this.props.navigation.openDrawer()}
        leftElement="menu"
        centerElement={Strings.titleAbout}
      />
    );
  }

  render() {
    return (
      <View style={{height: '100%'}}>
        {this.renderToolbar()}
        <View style={styles.container}>
          <HTML html={Strings.aboutSubtitle} />
          <HTML style={{fontSize: 16}} html={Strings.aboutText} />
        </View>
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
