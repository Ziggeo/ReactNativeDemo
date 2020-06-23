import React from 'react';
import {Button} from 'react-native-elements';
import Theme from '../Theme';
import {styles} from './style';

export default function createButton(text, onPress, buttonStyle, textStyle) {
  return (
    <Button
      buttonStyle={buttonStyle}
      textStyle={{color: Theme.colors.secondaryText}}
      title={text}
      onPress={onPress}
      titleStyle={[styles.textStyle, textStyle]}
    />
  );
}
