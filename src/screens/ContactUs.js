import React from 'react';
import Strings from '../Strings';
import {StyleSheet, View} from 'react-native';
import Theme from '../Theme';
import createToolbar from '../ui/Toolbar';
import createButton from '../ui/Button';
import Text from '../ui/Text';
import {sendEmail} from '../utils/common';
import {Linking} from 'react-native';

export class ContactUs extends React.Component {
    render() {
        return (
            <View style={{height: '100%'}}>
                {createToolbar(Strings.titleContact, this.props)}
                <View style={styles.container}>
                    <Text style={[Theme.styles.subtitle]}>{Strings.subtitleContact}</Text>
                    <Text style={[Theme.styles.message]}>{Strings.messageContact}</Text>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            flexDirection: 'row',
                        }}>
                        {createButton(
                            Strings.btnContactUs,
                            this.onBtnContactUsPressed,
                            styles.btnContactUs,
                        )}
                        {createButton(
                            Strings.btnVisitSupport,
                            this.onBtnVisitSupportPressed,
                            styles.btnVisitSupport,
                        )}
                    </View>
                </View>
            </View>
        );
    }

    onBtnContactUsPressed = () => {
        sendEmail('support@ziggeo.com');
    };
    onBtnVisitSupportPressed = () => {
        Linking.openURL('https://support.ziggeo.com');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: Theme.size.commonMargin,
        alignItems: 'center',
        marginBottom: Theme.size.commonMargin,
    },
    btnContactUs: {
        marginRight: Theme.size.commonMargin,
        backgroundColor: Theme.colors.primary,
        height: Theme.size.btnQrHeight,
        width: Theme.size.btnQrWidth,
    },
    btnVisitSupport: {
        marginLeft: Theme.size.commonMargin,
        backgroundColor: Theme.colors.primary,
        height: Theme.size.btnQrHeight,
        width: Theme.size.btnQrWidth,
    },
});
