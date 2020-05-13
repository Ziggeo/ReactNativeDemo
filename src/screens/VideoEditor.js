import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Toolbar, Button} from 'react-native-material-ui';
import Theme from '../Theme';
import Strings from '../Strings';

export class VideoEditor extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderToolbar()}
        <View style={styles.textContainer}>
          <Text>{Strings.comingSoon}</Text>
        </View>
      </View>
    );
  }

  renderToolbar() {
    return (
      <Toolbar
        style={{container: {backgroundColor: Theme.colors.primary}}}
        onLeftElementPress={() => this.props.navigation.openDrawer()}
        leftElement="menu"
        centerElement={Strings.titleVideoEditor}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {height: '100%'},
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
