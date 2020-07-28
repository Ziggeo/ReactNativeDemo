import {StyleSheet, View} from 'react-native';
import React from 'react';
import Strings from '../Strings';
import Text from '../ui/Text';
import createToolbar from '../ui/Toolbar';

export class VideoEditor extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {createToolbar(Strings.titleVideoEditor, this.props)}
                <View style={styles.textContainer}>
                    <Text>{Strings.comingSoon}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {height: '100%'},
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});
