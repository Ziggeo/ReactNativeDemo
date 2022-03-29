import {StyleSheet} from 'react-native';
import Theme from '../../Theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.primary,
    flex: 1,
  },
  title: {
    fontSize: 18,
    padding: Theme.size.commonMargin,
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 20,
  },
  sidebarDivider: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
  },
});

export default styles;
