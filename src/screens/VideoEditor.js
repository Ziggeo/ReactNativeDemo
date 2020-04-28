import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Toolbar, Button} from 'react-native-material-ui';
import Theme from '../Theme';
import Strings from '../Strings';
import Ziggeo from 'react-native-ziggeo-library';
export class VideoEditor extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.renderToolbar()}
        <Button
          style={{
            container: {
              marginTop: Theme.size.btnSelectFileMarginTop,
              backgroundColor: Theme.colors.primary,
            },
            text: {
              color: Theme.colors.white,
            },
          }}
          text={Strings.btnSelectFileText}
        />
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
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
  },
});
