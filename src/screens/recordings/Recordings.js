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
import Spinner from 'react-native-loading-spinner-overlay';
import {OutlinedTextField} from 'react-native-material-textfield';
import Theme from '../../Theme';

export function Recordings(recordings) {
  console.log('Ziggeo. init Recordings');
  return () => (
    <View style={styles.container}>
      {/*{!items ? */}
      {/*: null}*/}
      {/*<Text>{Strings.messageRecordingsListEmpty}</Text>*/}
      {/*<GridList*/}
      {/*  style={{width: '100%'}}*/}
      {/*  data={recordings}*/}
      {/*  numColumns={2}*/}
      {/*  renderItem={({item}) => <Item item={item} />}*/}
      {/*/>*/}
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item
          title="Image"
          onPress={() => console.log('notes tapped!')}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          style={styles.actionButtonItem}
          title="Audio"
          onPress={() => {}}>
          <Icon name="md-notifications-off" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item title="Screen" onPress={() => {}}>
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item title="Camera" onPress={() => {}}>
          <Icon name="md-done-all" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center',
    flex: 1,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  actionButtonItem: {},
});
