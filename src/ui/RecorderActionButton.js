import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Theme from '../Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RecorderActionButton = ({type, onPress, style}) => {
  const {container, startButton} = styles(type);
  const isStart = type === 'start';
  const isPause = type === 'pause';
  const isStop = type === 'stop';
  return (
    <TouchableOpacity style={[container, style]} onPress={onPress}>
      {isStart && <View style={startButton} />}
      {isPause && <Icon name="pause" color="#131210" size={35} />}
      {isStop && <Icon name="stop" color="#131210" size={35} />}
    </TouchableOpacity>
  );
};

export default RecorderActionButton;

const styles = type =>
  StyleSheet.create({
    container: {
      width: 50,
      height: 50,
      borderWidth: 1,
      borderColor: Theme.colors.white,
      backgroundColor: type === 'start' ? 'transparent' : 'white',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 25,
    },
    startButton: {
      width: 41,
      height: 41,
      borderRadius: 21,
      backgroundColor: '#FF6E6E',
    },
  });
