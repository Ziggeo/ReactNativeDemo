import {StyleSheet} from 'react-native';
import Theme from '../../Theme';
const styles = StyleSheet.create({
  container: {
    padding: Theme.size.commonMargin,
  },
  preview: {
    height: Theme.size.previewHeight,
    backgroundColor: Theme.colors.primary,
    marginBottom: Theme.size.commonBigMargin,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
