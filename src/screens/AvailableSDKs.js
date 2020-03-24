import {Image, StyleSheet, TouchableOpacity, View, Linking} from 'react-native';
import React from 'react';

import GridList from 'react-native-grid-list';
import Theme from '../Theme';
import CardView from 'react-native-cardview';
import Toast from 'react-native-simple-toast';
import Strings from '../Strings';

export const AvailableSDK = ({navigation}) => (
  <View style={styles.container}>
    <GridList
      style={{width: '100%'}}
      data={items}
      numColumns={2}
      renderItem={({item}) => <Item item={item} />}
    />
  </View>
);

function Item({item, navigate}) {
  return (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => {
        if (item.url) {
          Linking.canOpenURL(item.url).then(supported => {
            if (supported) {
              Linking.openURL(item.url);
            } else {
              console.log("Don't know how to open URI: " + item.url);
            }
          });
        } else {
          Toast.show(Strings.comingSoon);
        }
      }}>
      <CardView style={styles.card} cardElevation={2} cornerRadius={5}>
        <Image style={styles.image} source={item.thumbnail} />
      </CardView>
    </TouchableOpacity>
  );
}

const items = [
  {
    url: 'https://github.com/Ziggeo/iOS-Client-SDK',
    thumbnail: require('../assets/img/sdks/ic_objc.png'),
  },
  {
    url: 'https://github.com/Ziggeo/Swift-Client-SDK',
    thumbnail: require('../assets/img/sdks/ic_swift.png'),
  },
  {
    url: 'https://github.com/Ziggeo/Android-Client-SDK',
    thumbnail: require('../assets/img/sdks/ic_android.png'),
  },
  {
    url: 'https://github.com/Ziggeo/Xamarin-SDK-Demo',
    thumbnail: require('../assets/img/sdks/ic_xamarin.png'),
  },
  {
    url: 'https://github.com/Ziggeo/ReactNativeDemo',
    thumbnail: require('../assets/img/sdks/ic_reactnative.png'),
  },
  {
    thumbnail: require('../assets/img/sdks/ic_flutter.png'),
  },
  {
    url: 'https://github.com/Ziggeo/ZiggeoPhpSdk',
    thumbnail: require('../assets/img/sdks/ic_php.png'),
  },
  {
    url: 'https://github.com/Ziggeo/ZiggeoPythonSdk',
    thumbnail: require('../assets/img/sdks/ic_python.png'),
  },
  {
    url: 'https://github.com/Ziggeo/ZiggeoNodeSdk',
    thumbnail: require('../assets/img/sdks/ic_nodejs.png'),
  },
  {
    url: 'https://github.com/Ziggeo/ZiggeoRubySdk',
    thumbnail: require('../assets/img/sdks/ic_ruby.png'),
  },
  {
    url: 'https://github.com/Ziggeo/ZiggeoJavaSdk',
    thumbnail: require('../assets/img/sdks/ic_java.png'),
  },
  {
    url: 'https://github.com/Ziggeo/ZiggeoCSharpSDK',
    thumbnail: require('../assets/img/sdks/ic_csharp.png'),
  },
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
  },
  listItem: {
    padding: Theme.size.commonHalfMargin,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  card: {
    padding: 20,
    width: '100%',
    height: '100%',
  },
});
