import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Strings from '../Strings';
import {Recordings} from './recordings/Recordings';
import {Settings} from './Settings';
import {VideoEditor} from './VideoEditor';
import {AvailableSDK} from './AvailableSDKs';
import {TopClients} from './TopClients';
import {ContactUs} from './ContactUs';
import {About} from './About';
// import {Ionicons} from '@expo/vector-icons';

const Drawer = createDrawerNavigator(
  {
    Recordings: {screen: Recordings},
    VideoEditor: {screen: VideoEditor},
    Settings: {screen: Settings},
    AvailableSDK: {screen: AvailableSDK},
    TopClients: {screen: TopClients},
    ContactUs: {screen: ContactUs},
    About: {screen: About},
  },
  {
    initialRouteName: Recordings.name,
    unmountInactiveRoutes: true,
    headerMode: 'none',
    contentComponent: props => <Sidebar {...props} />,
  },
);

function Item({item, navigate}) {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => navigate(item.name)}>
      {/*<Ionicons name={item.icon} size={32} />*/}
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
}

class Sidebar extends React.Component {
  state = {
    mainRoutes: [
      {
        title: Strings.itemRecordings,
        name: Recordings.name,
        icon: 'ios-home',
      },
      {
        title: Strings.itemVideoEditor,
        name: VideoEditor.name,
        icon: 'ios-contact',
      },
      {
        title: Strings.itemSettings,
        name: Settings.name,
        icon: 'ios-settings',
      },
    ],

    infoRoutes: [
      {
        title: Strings.itemSdks,
        name: AvailableSDK.name,
        icon: 'ios-home',
      },
      {
        title: Strings.itemClients,
        name: TopClients.name,
        icon: 'ios-contact',
      },
      {
        title: Strings.itemContact,
        name: ContactUs.name,
        icon: 'ios-settings',
      },
      {
        title: Strings.itemAbout,
        name: About.name,
        icon: 'ios-settings',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 10}}>
          Janna Doe
        </Text>
        <Text style={{color: 'gray', marginBottom: 10}}>janna@doe.com</Text>
        <View style={styles.sidebarDivider} />
        <FlatList
          style={{width: '100%', marginLeft: 30}}
          data={this.state.mainRoutes}
          renderItem={({item}) => (
            <Item item={item} navigate={this.props.navigation.navigate} />
          )}
          keyExtractor={item => item.name}
        />
        <View style={styles.sidebarDivider} />

        <FlatList
          style={{width: '100%', marginLeft: 30}}
          data={this.state.infoRoutes}
          renderItem={({item}) => (
            <Item item={item} navigate={this.props.navigation.navigate} />
          )}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}
//TODO initialRouteName duplication?
const AppNavigator = createStackNavigator(
  {
    Drawer: {screen: Drawer},
  },
  {
    initialRouteName: 'Drawer',
    headerMode: 'none',
    unmountInactiveRoutes: true,
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center',
    flex: 1,
  },
  listItem: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 20,
  },
  sidebarDivider: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
});
