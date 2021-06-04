import {StyleSheet} from 'react-native';
import Theme from '../../Theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  actionButtonIcon: {
    fontSize: 25,
    color: 'white',
  },
  card: {
    height: Theme.size.recordingItemHeight,
    padding: Theme.size.commonHalfMargin,
    margin: Theme.size.commonHalfMargin,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  listItemIcon: {
    fontSize: Theme.size.iconSize,
  },
});
export default styles;
