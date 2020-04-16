import {List} from './List';

export class Sdks extends List {
  getItems() {
    return sdks;
  }
}
export const sdks = [
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
