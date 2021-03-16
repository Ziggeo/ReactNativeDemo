import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RecorderActionButton from './RecorderActionButton';

const RecorderControlPanel = ({
  isRecording = false,
  onStart,
  onPause,
  onStop,
  onFlipCamera,
}) => {
  return (
    <>
      {!isRecording && <RecorderActionButton type="start" onPress={onStart} />}
      {isRecording && (
        <View style={styles.pauseStopContainer}>
          <RecorderActionButton
            type="pause"
            onPress={onPause}
            style={styles.pauseButton}
          />
          <RecorderActionButton type="stop" onPress={onStop} />
        </View>
      )}

      <View style={styles.flipCamera}>
        <Icon.Button
          name="camera-party-mode"
          backgroundColor="transparent"
          color="white"
          size={30}
          onPress={onFlipCamera}
        />
      </View>
    </>
  );
};

export default RecorderControlPanel;

const styles = StyleSheet.create({
  pauseStopContainer: {
    flexDirection: 'row',
  },
  pauseButton: {
    marginRight: 24,
  },
  flipCamera: {
    position: 'absolute',
    right: 0,
    top: 15,
  },
});
