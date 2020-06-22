import React from 'react';
import {StyleSheet, Text as TextRN} from 'react-native';

export default class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextRN style={[styles.defaultStyle, this.props.style]}>
        {this.props.children}
      </TextRN>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'quicksand_regular',
  },
});
