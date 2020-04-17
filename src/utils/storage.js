import {AsyncStorage} from 'react-native';

// User
const stUserKey = 'user';
export const stGetUser = () =>
  getJsonObjectFromStorage(stUserKey, {onJsonParseError: stRemoveUser});
export const stSaveUser = user =>
  AsyncStorage.setItem(stUserKey, JSON.stringify(user));
export const stRemoveUser = () => AsyncStorage.removeItem(stUserKey);

// Local functions
const getJsonObjectFromStorage = (key, params = {}) =>
  new Promise(async resolve => {
    const {onJsonParseError} = params;

    try {
      const dataJson = await AsyncStorage.getItem(key);
      if (!dataJson) {
        resolve(null);
      }

      const data = JSON.parse(dataJson);
      resolve(data);
    } catch (e) {
      onJsonParseError && onJsonParseError();
      resolve(null);
    }
  });
