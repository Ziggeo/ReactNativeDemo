import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Strings from '../../Strings';
import GridList from 'react-native-grid-list';
import CardView from 'react-native-cardview';
import Ziggeo from 'react-native-ziggeo-library';
import {connect} from 'react-redux';
import styles from './styles';
import {fetchPosts} from './actions';
import Toast from 'react-native-simple-toast';
import Loading from '../../components/common/Loading/Loading';

async function loadRecordings() {
  try {
    console.log('Ziggeo. loading');
    var value = await Ziggeo.VideosApi.index();
    return value;
  } catch (e) {
    console.log('Ziggeo. Error:' + e);
    //recorder error or recording was cancelled by user
    alert(e);
  }
}

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
    const {dispatch} = this.props;
    dispatch(requestRecs('r/pics'));
    // const {isLoading, recordings} = this.props;
    // loadRecordings().then(value => {
    //   console.log('Ziggeo. then');
    //   this.props.isLoading = false;
    //   this.props.recordins = value;
    // });
  }

  render() {
    //TODO
    console.log('Ziggeo. Recordings:' + new Date());
    console.log(this.props);
    const {isLoading, recordings} = this.props;
    return (
      <View style={styles.container}>
        {isLoading && this.renderLoading()}
        {/*{recordings && this.renderList(recordings)}*/}
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            title="Image"
            onPress={() => this.onImagePressed()}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            style={styles.actionButtonItem}
            title="Audio"
            onPress={() => {
              this.onAudioPressed();
            }}>
            <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            title="Screen"
            onPress={() => {
              this.onScreenPressed();
            }}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item
            title="Camera"
            onPress={() => {
              this.onCameraPressed();
            }}>
            <Icon name="md-done-all" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }

  renderLoading() {
    return <Loading />;
  }
  renderList(recordings) {
    return (
      <View>
        {/*<Text>{Strings.messageRecordingsListEmpty}</Text>*/}
        {/*<GridList*/}
        {/*  style={{width: '100%'}}*/}
        {/*  data={recordings}*/}
        {/*  numColumns={2}*/}
        {/*  renderItem={({item}) => <Item item={item} />}*/}
        {/*/>*/}
      </View>
    );
  }
}

function Item({item}) {
  return (
    <TouchableOpacity style={styles.listItem} onPress={() => {}}>
      <CardView style={styles.card} cardElevation={2} cornerRadius={5}>
        {/*<Image style={styles.image} source={item.thumbnail} />*/}
      </CardView>
    </TouchableOpacity>
  );
}

const mapStateToProps = ({recs}) => recs;

export default connect(
  mapStateToProps,
  {
    fetchPosts,
  },
)(Recordings);
