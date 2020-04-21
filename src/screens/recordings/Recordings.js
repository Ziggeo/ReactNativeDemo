import {
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import Loading from '../../components/common/Loading/Loading';
import Theme from '../../Theme';
import {format} from 'date-fns';

export class Recordings extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      isLoading: false,
      recordings: null,
    };
  }

  onImagePressed() {
    Toast.show(Strings.comingSoon);
  }

  onAudioPressed() {
    Toast.show(Strings.comingSoon);
  }

  onScreenPressed() {
    Toast.show(Strings.comingSoon);
  }

  onCameraPressed() {
    Ziggeo.record();
  }
  componentDidMount(): void {
    this.props.requestRecs('r/pics');
  }

  render() {
    const {isLoading, recordings} = this.props;
    return (
      <View style={styles.container}>
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

  renderLoading() {
    return <Loading styles={{padding: Theme.size.commonHalfMargin}} />;
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
      <TouchableOpacity onPress={() => {}}>
        <CardView
          style={styles.card}
          cardElevation={Theme.size.itemElevation}
          cornerRadius={Theme.size.itemCornerRadius}>
          <Icon name="video" style={styles.listItemIcon} />
          <View
            style={{
              height: Theme.size.listItemContentHeight,
              justifyContent: 'space-between',
            }}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={{width: 160}}>
              {item.token}
            </Text>
            <Text>{item.tags}</Text>
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
