import React from 'react';
import Strings from '../Strings';
import {Button} from 'react-native-elements';
import {StyleSheet, View} from 'react-native';
import Theme from '../Theme';
import toolbar from '../ui/Toolbar';

export class ContactUs extends React.Component {
  render() {
    return (
      <View style={{height: '100%'}}>
        {toolbar(Strings.titleContact, this.props)}
        <View style={styles.container}>
          <Button
            buttonStyle={styles.btn}
            title={Strings.btnStartNowText}
            onPress={this.onStartBtnPressed}
          />
        </View>
      </View>
    );
  }

  onStartBtnPressed = () => {};
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Theme.size.commonMargin,
    alignItems: 'center',
  },
  btn: {
    marginTop: Theme.size.btnStartNowTopMargin,
    backgroundColor: Theme.colors.primary,
    height: Theme.size.btnQrHeight,
    width: Theme.size.btnQrWidth,
  },
});
