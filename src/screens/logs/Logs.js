import {FlatList, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Strings from '../../Strings';
import styles from './styles';
import Text from '../../ui/Text';
import createToolbar from '../../ui/Toolbar';
import createButton from '../../ui/Button';
import Ziggeo from 'react-native-ziggeo-library';
import {format} from 'date-fns';
import {getLogs} from './storage';
import Theme from '../../Theme';

export class Logs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: getLogs(),
    };
  }

  componentDidMount(): void {
    this._unsubscribe = this.props.navigation.addListener('willFocus', () => {
      this.setState({
        list: getLogs(),
      });
    });
  }

  componentWillUnmount(): void {
    this._unsubscribe.remove();
  }

  render() {
    return (
      <View style={styles.container}>
        {createToolbar(Strings.titleLogs, this.props)}
        {this.renderList(this.state.list)}
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
          }}>
          <View style={styles.buttonContainer}>
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

  renderList(logsList) {
    return (
      <View
        style={{
          marginEnd: Theme.size.commonMargin,
          marginStart: Theme.size.commonMargin,
        }}>
        {!logsList && (
          <Text style={Theme.styles.emptyMessage}>
            {Strings.messageLogsEmpty}
          </Text>
        )}
        {logsList && (
          <FlatList
            data={logsList}
            renderItem={({item}) => this.renderItem(item)}
          />
        )}
      </View>
    );
  }

  renderItem(item) {
    return (
      <Text style={{marginTop: Theme.size.commonMargin}}>
        [{format(new Date(item.timestamp), 'dd.MM.yyyy HH:mm')}] {item.name}.{' '}
        {item.details}
      </Text>
    );
  }

  onBtnSendReportPressed = () => {
    Ziggeo.sendReport(getLogs());
  };
}
