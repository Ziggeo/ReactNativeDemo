import React from 'react';
import {TextInput} from 'react-native-paper';
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
    <TextInput
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
