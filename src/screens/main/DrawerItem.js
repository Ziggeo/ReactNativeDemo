import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
// import {Ionicons} from '@expo/vector-icons';
import s from './styles';

function DrawerItem({item, navigate}) {
  return (
    <TouchableOpacity style={s.listItem} onPress={() => navigate(item.name)}>
      {/*<Ionicons name={item.icon} size={32} />*/}
      <Text style={s.title}>{item.title}</Text>
    </TouchableOpacity>
  );
}

export default DrawerItem;
