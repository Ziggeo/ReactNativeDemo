import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Strings from '../../Strings';
import CardView from 'react-native-cardview';
import Ziggeo from 'react-native-ziggeo-library';
import {connect} from 'react-redux';
import styles from './styles';
import {requestRecs} from './actions';
import Toast from 'react-native-simple-toast';
import Theme from '../../Theme';
import {format} from 'date-fns';
import Routes from '../../Routes';
import Toolbar from 'react-native-material-ui/src/Toolbar';
import Spinner from 'react-native-loading-spinner-overlay';

export class Recordings extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      isLoading: false,
      recordings: null,
    };
  }

  componentDidMount(): void {
    this._unsubscribe = this.props.navigation.addListener('willFocus', () => {
      this.props.requestRecs();
    });
    this.subscribeForEvents();
  }

  componentWillUnmount(): void {
    this._unsubscribe.remove();
  }

  onError() {
    Toast.show(Strings.errCommon);
  }

  onImagePressed() {
    Toast.show(Strings.comingSoon);
  }

  onAudioPressed() {
    Toast.show(Strings.comingSoon);
  }

  onScreenPressed() {
    Ziggeo.startScreenRecorder();
  }

  onCameraPressed() {
    Ziggeo.record();
  }

  subscribeForEvents() {
    const recorderEmitter = Ziggeo.recorderEmitter();
    const subscription = recorderEmitter.addListener(
      'UploadProgress',
      progress =>
        console.log(
          progress.fileName +
            ' uploaded ' +
            progress.bytesSent +
            ' from ' +
            progress.totalBytes +
            ' total bytes',
        ),
    );
    recorderEmitter.addListener('Verified', data =>
      console.log('Verified:' + data.token),
    );
    recorderEmitter.addListener('Processed', data =>
      console.log('Processed:' + data.token),
    );
    recorderEmitter.addListener('Processing', data =>
      console.log('Processing:' + data.token),
    );
  }

  render() {
    const {isLoading, recordings} = this.props;
    return (
      <View style={styles.container}>
        {this.renderToolbar()}
        {isLoading && this.renderLoading()}
        {recordings && this.renderList(recordings)}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            title="Image"
            onPress={() => this.onImagePressed()}>
            <Icon name="image" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            style={styles.actionButtonItem}
            title="Audio"
            onPress={() => {
              this.onAudioPressed();
            }}>
            <Icon name="microphone" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            title="Screen"
            onPress={() => {
              this.onScreenPressed();
            }}>
            <Icon name="monitor" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            title="Camera"
            onPress={() => {
              this.onCameraPressed();
            }}>
            <Icon name="video" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }

  renderToolbar() {
    return (
      <Toolbar
        style={{container: {backgroundColor: Theme.colors.primary}}}
        onLeftElementPress={() => this.props.navigation.openDrawer()}
        leftElement="menu"
        centerElement={Strings.titleRecordings}
      />
    );
  }

  renderLoading() {
    return <Spinner visible={true} />;
  }

  renderList(recordings) {
    return (
      <View style={styles.container}>
        {!recordings && (
          <Text style={styles.emptyMessage}>
            {Strings.messageRecordingsListEmpty}
          </Text>
        )}
        {recordings && (
          <FlatList
            data={recordings}
            renderItem={({item}) => this.renderItem(item)}
          />
        )}
      </View>
    );
  }

  renderItem(item) {
    return (
      <TouchableOpacity
        onPress={() => {
          const {navigation} = this.props;
          navigation.navigate(Routes.RecordingDetails, item);
        }}>
        <CardView
          style={styles.card}
          cardElevation={Theme.size.itemElevation}
          cornerRadius={Theme.size.itemCornerRadius}>
          <Icon name="video" style={styles.listItemIcon} />
          <View
            style={{
              height: Theme.size.listItemContentHeight,
              justifyContent: 'center',
            }}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{width: 160}}>
              {item.token}
            </Text>
            {item.tags && <Text>{item.tags}</Text>}
          </View>
          <View
            style={{
              height: Theme.size.listItemContentHeight,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>{item.state_string}</Text>
            <Text>
              {format(new Date(item.created * 1000), 'dd.MM.yyyy HH:mm')}
            </Text>
          </View>
        </CardView>
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = ({recs}) => recs;
export default connect(
  mapStateToProps,
  {
    requestRecs,
  },
)(Recordings);
