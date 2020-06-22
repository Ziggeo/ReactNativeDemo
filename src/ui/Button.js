import React from 'react';
import {Button} from 'react-native-elements';

export default function createButton(text, style, onPress) {
  return <Button buttonStyle={style} title={text} onPress={onPress} />;
}
