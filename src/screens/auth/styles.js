import React from 'react';
import {View, StyleSheet, ScrollView, Text, Linking, Image} from 'react-native';
import Theme from '../../Theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Theme.size.commonMargin,
  },
  controls: {
    height: Theme.size.authControlsMarginTop,
    width: '100%',
    justifyContent: 'flex-end',
  },
  scrollContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: Theme.size.commonMargin,
  },
  logo: {
    height: 100,
    width: Theme.size.logoWidth,
    marginTop: Theme.size.logoMarginTop,
    marginBottom: Theme.size.logoMarginBottom,
  },
  message: {
    color: Theme.colors.secondaryText,
    textAlign: 'center',
    marginTop: Theme.size.commonMargin,
    marginBottom: Theme.size.commonMargin,
  },
  actionBtn: {
    marginTop: Theme.size.commonMargin,
    backgroundColor: Theme.colors.primary,
    height: Theme.size.btnQrHeight,
    width: Theme.size.btnQrWidth,
  },
  stateSwitchBtn: {
    marginTop: Theme.size.commonHalfMargin,
    backgroundColor: Theme.colors.transparent,
  },
});

export default styles;
