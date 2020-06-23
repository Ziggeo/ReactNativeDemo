import React from 'react';
import {TextField} from 'react-native-material-textfield';
import {textFontStyle} from './textFontStyle';

export default function createTextField({
  disabled,
  label,
  onSubmitEditing,
  textColor,
  value,
  onChangeText,
  error,
} = {}) {
  return (
    <TextField
      disabled={disabled}
      label={label}
      onSubmitEditing={onSubmitEditing}
      textColor={textColor}
      value={value}
      titleTextStyle={textFontStyle.textStyle}
      onChangeText={onChangeText}
      error={error}
    />
  );
}
