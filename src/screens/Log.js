import {FlatList, Linking, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Strings from '../Strings';
import createToolbar from '../ui/Toolbar';
import Theme from '../Theme';
import Text from '../ui/Text';
import Hyperlink from 'react-native-hyperlink';
import createButton from '../ui/Button';

export class Log extends React.Component {
    render() {
        return (
            <View style={{height: '100%'}}>
                {createToolbar(Strings.titleAbout, this.props)}
                <View style={styles.container}>
                    {/*{!logs && (*/}
                        <Text style={[Theme.styles.emptyMessage]}>{Strings.messageLogsEmpty}</Text>
                    {/*)}*/}
                    {/*{logs && (*/}
                    {/*    <FlatList*/}
                    {/*        data={logs}*/}
                    {/*        renderItem={({item}) => this.renderItem(item)}*/}
                    {/*    />*/}
                    {/*)}*/}
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            flexDirection: 'row',
                        }}>
                        {createButton(
                            Strings.btnSendReport,
                            this.onBtnSendReportPressed,
                            styles.btnSendReport,
                        )}
                    </View>
                </View>
            </View>
        );
    }

    onBtnSendReportPressed = () => {
        console.log('onBtnSendReportPressed');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Theme.size.commonMargin,
        alignItems: 'center',
        marginBottom: Theme.size.commonMargin,
    },
    btnSendReport: {
        alignContent: 'center',
        marginLeft: Theme.size.commonMargin,
        backgroundColor: Theme.colors.primary,
        height: Theme.size.btnQrHeight,
        width: Theme.size.btnQrWidth,
    },
});
