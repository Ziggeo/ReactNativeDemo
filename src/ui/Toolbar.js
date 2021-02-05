import React from 'react';
import Toolbar from 'react-native-material-ui/src/Toolbar';
import Theme from '../Theme';
import Text from './Text';
import {textFontStyle} from './textFontStyle';

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
          style={[
            textFontStyle.textStyle,
            {color: Theme.colors.white, fontSize: Theme.size.toolbarTextSize},
          ]}>
          {text}
        </Text>
      }
    />
  );
}
