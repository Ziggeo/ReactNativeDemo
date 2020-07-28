import Theme from './Theme';

const primaryColor = Theme.colors.primary;

export default {
    // Common
    appName: 'Ziggeo demo (React Native)',
    ok: 'OK',
    commonYes: 'Yes',
    commonNo: 'No',
    comingSoon: 'Coming soon!',
    commonConfirmMessage: 'Are you sure?',
    errCommon: 'Something wrong happened. Please, try again.',
    errNotEmpty: 'Field should not be empty.',

    // Auth screen
    authMessagePart1: 'Please go to ',
    authMessageLink: 'ziggeo.com/quickstart',
    authMessagePart2:
        ' on your desktop or laptop and scan QR code. This will allow you to connect your desktop and mobile demo experience',
    btnScanQrText: 'SCAN QR CODE',
    btnUseEnteredText: 'USE ENTERED',
    enterQrManuallyText: 'or enter manually',
    enterManuallyHint: 'Application token',
    useScannerText: 'or use scanner',

    // Drawer
    titleAppToken: 'Application token:',
    itemRecordings: 'Recordings',
    itemSettings: 'Settings',
    itemSdks: 'Available SDKs',
    itemClients: 'Top clients',
    itemContact: 'Contact us',
    itemAbout: 'About',
    itemLog: 'Log',
    itemVideoEditor: 'Video Editor',

    // Logout confirmation
    logoutMessage: 'Are you sure you want to log out?',

    // Recordings screen
    titleRecordings: 'Recordings',
    errCheckIndexing:
        'It\'s possible you\'ve forgotten to allow index operation. Please, check app settings on the website.',

    // Settings screen
    titleSettings: 'Settings',

    // SDKs screen
    titleSdks: 'Available SDKs',
    mobileCategory: 'Mobile SDKs',
    serverCategory: 'Server-Side SDKs',

    // Clients screen
    titleClients: 'Top Clients',

    // Contact screen
    titleContact: 'Contact us',
    subtitleContact: 'Stay in touch',
    messageContact:
        'Do you have a question about Ziggeo?\nWondering how you can start using Ziggeo?\nWish to get in touch with someone to see how you can start using Ziggeo tomorrow?\nIf you are ready to start a video revolution of your website / service / app or system, click on the Contact Us button to send us an email, or visit our support base to find answers or ask us there.',
    btnContactUs: 'Contact Us',
    btnVisitSupport: 'Visit Support',

    // Recordings screen
    titleAbout: 'About',
    messageRecordingsListEmpty:
        'There are no recordings.\nPress plus button to add some.',

    // Recording details screen
    titleDetails: 'Details',
    hintToken: 'Token',
    hintKey: 'Key',
    hintTitle: 'Title for the recording (optional)',
    hintDescription: 'Description for the recording (optional)',

    // About screen
    aboutSubtitle: 'Thanks for trying our demo!',
    aboutText: `
  Visit https://github.com/Ziggeo/Android-Client-SDK if you want to star us or just to see the sources
  
  You might also want to take a look at other sections.
  
  Learn:
  - https://ziggeo.com/quickstart 
  - https://ziggeo.com/screencasts 
  - https://ziggeo.com/webinars 
  
  Reference:
  - https://ziggeo.com/docs 
  - https://support.ziggeo.com 
  - https://ziggeo.com/integrations 
  
  Sandboxes
  - https://ziggeo.com/sandbox/configuration 
  - https://ziggeo.com/sandbox/serverside 
  - https://ziggeo.com/sandbox/authorization-tokens 
  - https://ziggeo.com/sandbox/webhooks 
  
  Community
  - https://support.ziggeo.com/hc/en-us/community/posts 
  - https://stackoverflow.com/search?q=ziggeo 
  
  Support
  - mailto:support@ziggeo.com 
  - https://ziggeo.com/dev-updates`,

    // Video Editor
    titleVideoEditor: 'Video editor',
    btnSelectFileText: 'Select file to cut',
    readStoragePermissionMessage: 'The app needs access to read files.',
    cutVideoSavedTo: 'Video saved to: %s',
    videoChooserTitle: 'Select video',

    // About screen
    btnSendReport: 'Send report',

    // Custom recorder
    btnStartText: 'Start',
    btnStopText: 'Stop',
};
