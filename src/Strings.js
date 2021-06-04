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
  itemContact: 'Contact Us',
  itemAbout: 'About',
  itemLog: 'Log',
  itemVideoEditor: 'Video Editor',
  itemBackToBackUploads: 'Back to Back Uploads',
  itemCustomRecorder: 'Custom Recorder',
  itemCustomPlayer: 'Custom Player',

  // Logout confirmation
  logoutMessage: 'Are you sure you want to log out?',
  messageLogsEmpty: 'There are no logs.',

  // Recordings screen
  titleRecordings: 'Recordings',
  errCheckIndexing:
    "It's possible you've forgotten to allow index operation. Please, check app settings on the website.",

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

  //Settings
  customCameraMode: 'Custom camera mode',
  customVideoMode: 'Custom video mode',
  saveSettings: 'Save',

  // Logs screen
  titleLogs: 'Logs',

  // Recording details screen
  titleDetails: 'Details',
  hintToken: 'Token',
  hintKey: 'Key',
  hintTitle: 'Title for the recording (optional)',
  hintDescription: 'Description for the recording (optional)',

  // About screen
  btnSendReport: 'Send report',
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

  // Custom recorder
  btnStartText: 'Start',
  btnStopText: 'Stop',

  // Recorder events
  evRecLoaded: 'Recorder: loaded',
  evRecManuallySubmitted: 'Recorder: manually submitted',
  evRecRecordingStarted: 'Recorder: recording started',
  evRecRecordingStopped: 'Recording stopped',
  evRecCountdown: 'Recorder: countdown',
  evRecRecordingProgress: 'Recorder: recording progress',
  evRecReadyToRecord: 'Recorder: ready to record',
  evRecAccessForbidden: 'Recorder: access forbidden',
  evRecAccessGranted: 'Recorder: access granted',
  evRecNoCamera: 'Recorder: no camera',
  evRecNoMicrophone: 'Recorder: no microphone',
  evRecHasCamera: 'Recorder: has camera',
  evRecHasMicrophone: 'Recorder: has microphone',
  evRecMicrophoneHealth: 'Recorder: microphone health',
  evRecCanceledByUser: 'Recorder: canceled by user',
  evRecError: 'Recorder: error',
  evRecStreamingStarted: 'Recorder: streaming started',
  evRecStreamingStopped: 'Recorder: streaming stopped',

  // Player events
  evPlLoaded: 'Player: loaded',
  evPlAccessForbidden: 'Player: access forbidden',
  evPlAccessGranted: 'Player: access granted',
  evPlCanceledByUser: 'Player: canceled by user',
  evPlError: 'Player: error',
  evPlPlaying: 'Player: playing',
  evPlPaused: 'Player: paused',
  evPlEnded: 'Player: ended',
  evPlSeek: 'Player: seek',
  evPlReadyToPlay: 'Player: ready to play',

  // Uploader events
  evUplUploaded: 'Uploader: uploaded',
  evUplUploadingStarted: 'Uploader: uploading started',
  evUplUploadProgress: 'Uploader: upload progress',
  evUplProcessing: 'Uploader: processing',
  evUplProcessed: 'Uploader: processed',
  evUplVerified: 'Uploader: verified',
  evUplError: 'Uploader: error',

  // Uploader events
  evFsLoaded: 'FileSelector: loaded',
  evFsAccessForbidden: 'FileSelector: access forbidden',
  evFsAccessGranted: 'FileSelector: access granted',
  evFsCanceledByUser: 'FileSelector: canceled by user',
  evFsUploadSelected: 'FileSelector: upload selected',
  evFsError: 'FileSelector: error',
};
