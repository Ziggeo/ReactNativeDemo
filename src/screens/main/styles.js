import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 40,
    alignItems: 'center',
    flex: 1,
  },
  listItem: {
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 30,
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
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
