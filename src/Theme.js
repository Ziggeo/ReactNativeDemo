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
    smallIconSize: 20,
    largeIconSize: 40,
    hugeIconSize: 80,
    toolbarTextSize: 20,
    subtitleTextSize: 20,
    messageTextSize: 18,

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
    tokenLineWidth: 160,

    //Recording details screen
    previewHeight: 250,

    //Contact us screen
    btnStartNowTopMargin: 70,

    //Top clients screen
    clientsItemHeight: 200,

    //Video Editor screen
    btnSelectFileMarginTop: 250,
    btnStartStopTextSize: 15,
};

// ------------------------------------------------------------
// Colors
// ------------------------------------------------------------
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
    background: colors.primary,
    header: colors.primary,
};

Theme.styles = {
    emptyMessage: {
        paddingTop: Theme.size.listEmptyMessageMarginTop,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: Theme.size.subtitleTextSize,
        fontWeight: 'bold',
        marginTop: Theme.size.commonMargin,
    },
    message: {
        fontSize: Theme.size.messageTextSize,
        marginTop: Theme.size.commonMargin,
    },
};

export default Theme;
