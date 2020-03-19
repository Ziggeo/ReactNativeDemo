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
import Routes from '../Routes';
// import {Ionicons} from '@expo/vector-icons';

const Drawer = createDrawerNavigator(
  {
    Recording: {screen: Routes.Recordings},
    // VideoEditor: {screen: VideoEditor},
    // Settings: {screen: Settings},
    // AvailableSdk: {screen: AvailableSdk},
    // TopClients: {screen: TopClients},
    // ContactUs: {screen: ContactUs},
    // About: {screen: About},
  },
  {
    initialRouteName: 'Recording',
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
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
}

class Sidebar extends React.Component {
  state = {
    mainRoutes: [
      {
        name: Strings.itemRecordings,
        icon: 'ios-home',
      },
      {
        name: Strings.itemVideoEditor,
        icon: 'ios-contact',
      },
      {
        name: Strings.itemSettings,
        icon: 'ios-settings',
      },
    ],

    infoRoutes: [
      {
        name: Strings.itemSdks,
        icon: 'ios-home',
      },
      {
        name: Strings.itemClients,
        icon: 'ios-contact',
      },
      {
        name: Strings.itemContact,
        icon: 'ios-settings',
      },
      {
        name: Strings.itemAbout,
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
