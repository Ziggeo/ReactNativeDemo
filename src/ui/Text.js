import React from 'react';
import {Text as TextRN} from 'react-native';
import {textFontStyle} from './textFontStyle';

export default class Text extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TextRN
                ellipsizeMode={this.props.ellipsizeMode}
                numberOfLines={this.props.numberOfLines}
                style={[textFontStyle.textStyle, this.props.style]}>
                {this.props.children}
            </TextRN>
        );
    }
}
