import React from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
import Strings from '../../Strings';
import {Recordings} from '../recordings/Recordings';
import {Settings} from '../Settings';
import {VideoEditor} from '../VideoEditor';
import {ContactUs} from '../ContactUs';
import {About} from '../About';
import s from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../recordings/styles';
import Theme from '../../Theme';
import {getAppToken} from '../../utils/storage';
import Routes from '../../Routes';
import {removeAppToken} from '../../utils/storage';
import Text from '../../ui/Text';

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
    token: '',
  };

  componentDidMount(): void {
    getAppToken().then(value => {
      this.state.token = value;
    });
  }

  render() {
    return (
      <View style={s.container}>
        {this.drawHeader()}
        <View style={s.sidebarDivider} />
        <FlatList
          style={{width: '100%', backgroundColor: Theme.colors.white}}
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

  drawHeader() {
    return (
      <View
        style={{
          justifyContent: 'flex-start',
          padding: Theme.size.commonHalfMargin,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: Theme.colors.white,
              alignSelf: 'flex-end',
            }}>
            {Strings.titleAppToken}
          </Text>
          <Icon.Button
            backgroundColor={Theme.colors.primary}
            name="logout-variant"
            style={styles.actionButtonIcon}
            onPress={event => {
              this.logout();
            }}
          />
        </View>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            width: 200,
            color: Theme.colors.white,
          }}>
          {this.state.token}
        </Text>
      </View>
    );
  }

  logout() {
    removeAppToken().then(value => {
      const {navigation} = this.props;
      navigation.navigate(Routes.AuthStack);
    });
  }
}

export default DrawerMenu;
