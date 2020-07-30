import {StyleSheet} from 'react-native';
import Theme from '../../Theme';

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    listItemIcon: {
        fontSize: Theme.size.iconSize,
    },
    btnSendReport: {
        backgroundColor: Theme.colors.primary,
        width: Theme.size.btnSendReportWidth,
        marginBottom: Theme.size.commonMargin,
    },
});
export default styles;
