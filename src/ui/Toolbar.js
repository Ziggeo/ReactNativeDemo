import React from 'react';
import Toolbar from 'react-native-material-ui/src/Toolbar';
import Theme from '../Theme';
import Text from './Text';

export default function createToolbar(text, props) {
  return (
    <Toolbar
      style={{
        container: {
          backgroundColor: Theme.colors.primary,
        },
      }}
      onLeftElementPress={() => props.navigation.openDrawer()}
      leftElement="menu"
      centerElement={
        <Text
          style={{
            fontSize: Theme.size.toolbarTextSize,
            color: Theme.colors.white,
          }}>
          {text}
        </Text>
      }
    />
  );
}
