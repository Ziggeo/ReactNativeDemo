import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Strings from '../../Strings';
import {Recordings} from '../recordings/Recordings';
import {Settings} from '../Settings';
import {VideoEditor} from '../VideoEditor';
import {List} from '../List';
import {ContactUs} from '../ContactUs';
import {About} from '../About';
import {clients, sdks} from '../../assets/data';
import Ziggeo from 'react-native-ziggeo-library';
// import {Ionicons} from '@expo/vector-icons';
import s from './styles';
import DrawerItem from './DrawerItem';

async function loadRecordings() {
  try {
    console.log('Ziggeo. loadRecordings');
    var value = await Ziggeo.VideosApi.index();
    //TODO
    console.log('Ziggeo. Value:' + value);
    return value;
  } catch (e) {
    console.log('Ziggeo. Error:' + e);
    //recorder error or recording was cancelled by user
    alert(e);
  }
}

const Drawer = createDrawerNavigator(
  {
    Recordings: {screen: Recordings(loadRecordings())},
    VideoEditor: {screen: VideoEditor},
    Settings: {screen: Settings},
    ListSdks: {screen: List(sdks)},
    ListClients: {screen: List(clients)},
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
        name: 'ListSdks',
        icon: 'ios-home',
      },
      {
        title: Strings.itemClients,
        name: 'ListClients',
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
      <View style={s.container}>
        <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 10}}>
          Janna Doe
        </Text>
        <Text style={{color: 'gray', marginBottom: 10}}>janna@doe.com</Text>
        <View style={s.sidebarDivider} />
        <FlatList
          style={{width: '100%', marginLeft: 30}}
          data={this.state.mainRoutes}
          renderItem={({item}) => (
            <DrawerItem item={item} navigate={this.props.navigation.navigate} />
          )}
          keyExtractor={item => item.name}
        />
        <View style={s.sidebarDivider} />

        <FlatList
          style={{width: '100%', marginLeft: 30}}
          data={this.state.infoRoutes}
          renderItem={({item}) => (
            <DrawerItem item={item} navigate={this.props.navigation.navigate} />
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
