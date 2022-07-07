export default function(spec) {
  spec.describe('App token setting true', function() {
    spec.it('shows token on the screen', async function() {
      await spec.exists('Token');
      await spec.containsText('Token', 'TOKEN');
    });
  });

  spec.describe('App client token setting true', function() {
    spec.it('shows client token on the screen', async function() {
      await spec.exists('ClientAuthToken');
      await spec.containsText('ClientAuthToken', 'Client');
    });
  });

  spec.describe('App server token setting true', function() {
    spec.it('shows server token on the screen', async function() {
      await spec.exists('ServerAuthToken');
      await spec.containsText('ServerAuthToken', 'Server');
    });
  });

  spec.describe('App AdsURL setting true', function() {
    spec.it('shows AdsURL on the screen', async function() {
      await spec.exists('AdsURL');
      await spec.containsText('AdsURL', 'URL');
    });
  });

  spec.describe('App Recorder Config setting true', function() {
    spec.it('shows Recorder Config on the screen', async function() {
      await spec.pause(1000);

      await spec.exists('videoWidth');
      await spec.exists('videoBitrate');
      await spec.exists('audioSampleRate');
      await spec.exists('audioBitrate');
      await spec.exists('videoHeight');
      await spec.exists('liveStreamingEnabled');
      await spec.exists('autostartRecording');
      await spec.exists('startDelay');
      await spec.exists('coverSelectorEnabled');
      await spec.exists('maxRecordingDuration');
      await spec.exists('cameraSwitchEnabled');
      await spec.exists('sendImmediately');
      await spec.exists('camera');
      await spec.exists('quality');
      await spec.exists('blurMode');
      await spec.exists('pausableMode');

      await spec.containsText('videoWidth', '1090x13');
      await spec.containsText('videoBitrate', '10');
      await spec.containsText('audioSampleRate', '11');
      await spec.containsText('audioBitrate', '12');
      await spec.containsText('videoHeight', '1090x13');
      await spec.containsText('liveStreamingEnabled', 'true');
      await spec.containsText('autostartRecording', 'true');
      await spec.containsText('blurMode', 'true');
      await spec.containsText('startDelay', '5');
      await spec.containsText('coverSelectorEnabled', 'true');
      await spec.containsText('maxRecordingDuration', '50');
      await spec.containsText('cameraSwitchEnabled', 'true');
      await spec.containsText('sendImmediately', 'true');
      await spec.containsText('camera', '1');
      await spec.containsText('quality', '1');
      await spec.containsText('pausableMode', 'false');
    });
  });

  spec.describe('App Cache Config  setting true', function() {
    spec.it('shows Cache Config on the screen', async function() {
      await spec.exists('cache_size');
      await spec.exists('cache_root');

      await spec.containsText('cache_size', '1234');
      await spec.containsText('cache_root', 'cache_root_directory');
    });
  });

  spec.describe('App Uploader Config  setting true', function() {
    spec.it('shows Uploader Config on the screen', async function() {
      await spec.pause(1000);

      await spec.exists('sync_interval');
      await spec.exists('turn_off_uploader');
      await spec.exists('use_wifi_only');

      await spec.containsText('sync_interval', '6');
      await spec.containsText('turn_off_uploader', 'true');
      await spec.containsText('use_wifi_only', 'true');
    });
  });

  spec.describe('App Player Style  setting true', function() {
    spec.it('shows Player Style on the screen', async function() {
      await spec.pause(1000);

      await spec.exists('hidePlayerControls');
      await spec.exists('controllerStyle');
      await spec.exists('textColor');
      await spec.exists('unplayedColor');
      await spec.exists('playedColor');
      await spec.exists('bufferedColor');
      await spec.exists('tintColor');
      await spec.exists('muteOffImageDrawable');
      await spec.exists('muteOnImageDrawable');

      await spec.containsText('hidePlayerControls', 'true');
      await spec.containsText('controllerStyle', '6');
      await spec.containsText('textColor', '1234');
      await spec.containsText('unplayedColor', '1');
      await spec.containsText('playedColor', '2');
      await spec.containsText('bufferedColor', '3');
      await spec.containsText('tintColor', '4');
      await spec.containsText('muteOffImageDrawable', '5');
      await spec.containsText('muteOnImageDrawable', '6');
    });
  });

  spec.describe('App Dialog style  setting true', function() {
    spec.it('shows Dialog Style on the screen', async function() {
      await spec.exists('titleText');
      await spec.exists('mesResId');
      await spec.exists('mesText');
      await spec.exists('posBtnResId');
      await spec.exists('posBtnText');
      await spec.exists('negBtnResId');
      await spec.exists('negBtnText');

      await spec.containsText('titleText', 'title_text');
      await spec.containsText('mesResId', '123');
      await spec.containsText('mesText', 'mes_text');
      await spec.containsText('posBtnResId', '456');
      await spec.containsText('posBtnText', 'pos_btn_text');
      await spec.containsText('negBtnResId', '789');
      await spec.containsText('negBtnText', 'neg_btn_text');
    });
  });
}
