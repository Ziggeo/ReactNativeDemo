import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Strings from '../../Strings';
import {Recordings} from '../recordings/Recordings';
import {Settings} from '../Settings';
import {VideoEditor} from '../VideoEditor';
import {ContactUs} from '../ContactUs';
import {About} from '../About';
// import {Ionicons} from '@expo/vector-icons';
import s from './styles';

export function DrawerItem({item, navigate}) {
  return (
    <TouchableOpacity style={s.listItem} onPress={() => navigate(item.name)}>
      {/*<Ionicons name={item.icon} size={32} />*/}
      <Text style={s.title}>{item.title}</Text>
    </TouchableOpacity>
  );
}

class DrawerMenu extends React.Component {
  state = {
    routes: [
      {
        type: 'item',
        title: Strings.itemRecordings,
        name: Recordings.name,
        icon: 'ios-home',
      },
      {
        type: 'item',
        title: Strings.itemVideoEditor,
        name: VideoEditor.name,
        icon: 'ios-contact',
      },
      {
        type: 'item',
        title: Strings.itemSettings,
        name: Settings.name,
        icon: 'ios-settings',
      },
      {
        type: 'divider',
      },
      {
        type: 'item',
        title: Strings.itemSdks,
        name: 'ListSdks',
        icon: 'ios-home',
      },
      {
        type: 'item',
        title: Strings.itemClients,
        name: 'ListClients',
        icon: 'ios-contact',
      },
      {
        type: 'item',
        title: Strings.itemContact,
        name: ContactUs.name,
        icon: 'ios-settings',
      },
      {
        type: 'item',
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
          style={{width: '100%'}}
          data={this.state.routes}
          renderItem={({item}) => {
            if (item.type === 'divider') {
              return <View style={s.sidebarDivider} />;
            } else {
              return (
                <DrawerItem
                  item={item}
                  navigate={this.props.navigation.navigate}
                />
              );
            }
          }}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }
}

export default DrawerMenu;
