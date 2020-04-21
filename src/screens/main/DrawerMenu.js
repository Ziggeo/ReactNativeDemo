import React from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import Strings from '../../Strings';
import {Recordings} from '../recordings/Recordings';
import {Settings} from '../Settings';
import {VideoEditor} from '../VideoEditor';
import {ContactUs} from '../ContactUs';
import {About} from '../About';
import s from './styles';

export function DrawerItem({item, navigate}) {
  return (
    <TouchableOpacity onPress={() => navigate(item.name)}>
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
      },
      {
        type: 'item',
        title: Strings.itemVideoEditor,
        name: VideoEditor.name,
      },
      {
        type: 'item',
        title: Strings.itemSettings,
        name: Settings.name,
      },
      {
        type: 'divider',
      },
      {
        type: 'item',
        title: Strings.itemSdks,
        name: 'ListSdks',
      },
      {
        type: 'item',
        title: Strings.itemClients,
        name: 'ListClients',
      },
      {
        type: 'item',
        title: Strings.itemContact,
        name: ContactUs.name,
      },
      {
        type: 'item',
        title: Strings.itemAbout,
        name: About.name,
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
