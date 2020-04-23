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
});
export default styles;
