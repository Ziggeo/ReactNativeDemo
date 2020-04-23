import {getStatusBarHeight} from 'react-native-status-bar-height';

const Theme = {};

// ------------------------------------------------------------
// Sizing
// ------------------------------------------------------------
Theme.size = {
  //Common
  commonHalfMargin: 8,
  commonMargin: 16,
  commonBigMargin: 24,
  dividerHeight: 1,
  listEmptyMessageMarginTop: 200,
  itemElevation: 4,
  itemCornerRadius: 4,

  //Auth screen
  logoWidth: 250,
  logoMarginTop: 50,
  logoMarginBottom: 24,
  btnQrWidth: 160,
  btnQrHeight: 45,
  authControlsMarginTop: 80,

  //Drawer
  drawerWidth: 250,
  drawerMenuMargin: 24,

  //Recordings screen
  smallFabSize: 40,
  recordingItemHeight: 100,
  iconSize: 50,
  listItemContentHeight: 50,

  //Recording details screen
  previewHeight: 250,

  //Contact us screen
  btnStartNowTopMargin: 70,

  //Top clients screen
  clientsItemHeight: 200,

  //Video Editor screen
  btnSelectFileMarginTop: 250,

  //TODO OLD
  statusBarHeight: getStatusBarHeight(),
  headerHeight: 54,
  bottomNavbarHeight: 50,

  smallIconSize: 20,
  largeIconSize: 40,
  hugeIconSize: 120,

  posterAspectRation: 0.6667,
  backdropAspectRation: 1.78,
};

// ------------------------------------------------------------
// Colors
// ------------------------------------------------------------
Theme.gray = {
  darkest: '#121212',
  darker: '#1a1a1a',
  dark: '#353535',
  light: '#828282',
  lighter: '#cfcfcf',
  lightest: '#f8f8f8',
};

const colors = {
  primary: '#DC5163',
  primaryDark: '#AA3E4B',
  primaryLight: '#F0596C',
  accent: '#607D8B',
  primaryText: '#212121',
  secondaryText: '#a2a2a2',
  iconsBlack: '#FFFFFF',
  divider: '#BDBDBD',
  white: '#ffffffff',
  black: '#ff000000',
  lightGray: '#f1f1f1',
  grayFilter: '#CC4B4B4B',
  red: '#C20202',
  yellow: '#FCC02C',
  green: '#46AF0B',

  transparent: 'rgba(0,0,0,0)',

  success: '#28a745',
  danger: '#dc3545',
  warning: '#ffc107',
  info: '#17a2b8',
};

Theme.colors = {
  ...colors,
  background: Theme.gray.darker,
  header: Theme.gray.darkest,
  bottomNavbar: Theme.gray.darkest,
  textInputSelection: `${colors.primary}aa`,
};
// ------------------------------------------------------------
// Typography
// ------------------------------------------------------------
Theme.typography = {
  largeTitle: {
    fontSize: 34,
  },
  title1: {
    fontSize: 28,
  },
  title2: {
    fontSize: 22,
  },
  title3: {
    fontSize: 18,
  },
  titleCaption: {
    fontSize: 16,
  },
  onlyTextButton: {
    fontSize: 16,
  },
  input: {
    fontSize: 18,
  },
  body: {
    fontSize: 15,
  },
  caption1: {
    fontSize: 14,
  },
  caption2: {
    fontSize: 12,
  },
  caption3: {
    fontSize: 10,
  },

  // //About screen
  // aboutSubtitleTextSize:20sp</dimen>
  // aboutContentTextSize:18sp</dimen>
  //
  // //Available SDKs screen
  // categoryTextSize:20sp</dimen>
};

export default Theme;
