import AsyncStorage from '@react-native-community/async-storage';

const appTokenKey = 'appToken';
export const getAppToken = () => AsyncStorage.getItem(appTokenKey);
export const saveAppToken = user => AsyncStorage.setItem(appTokenKey, user);
export const removeAppToken = () => AsyncStorage.removeItem(appTokenKey);

const customVideoMode = 'customVideoMode';
export const getCustomVideoMode = () => AsyncStorage.getItem(customVideoMode);
export const saveCustomVideoMode = mode =>
  AsyncStorage.setItem(customVideoMode, mode);

const customCameraMode = 'customCameraMode';
export const getCustomCameraMode = () => AsyncStorage.getItem(customCameraMode);
export const saveCustomCameraMode = mode =>
  AsyncStorage.setItem(customCameraMode, mode);
