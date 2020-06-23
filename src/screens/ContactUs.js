import React from 'react';
import Strings from '../Strings';
import {StyleSheet, View} from 'react-native';
import Theme from '../Theme';
import toolbar from '../ui/Toolbar';
import createButton from '../ui/Button';

export class ContactUs extends React.Component {
  render() {
    return (
      <View style={{height: '100%'}}>
        {toolbar(Strings.titleContact, this.props)}
        <View style={styles.container}>
          {createButton(
            Strings.btnStartNowText,
            this.onStartBtnPressed,
            styles.btn,
          )}
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
