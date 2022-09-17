import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Ziggeo from 'react-native-ziggeo-library';
import {wrap} from 'cavy';
import useCavy from 'cavy/src/useCavy';

export default function TestScreen() {
  const generateTestHook = useCavy();
  const [token, setToken] = useState(null);
  const [clientAuthToken, setClientAuthToken] = useState(null);
  const [serverAuthToken, setServerAuthToken] = useState(null);
  const [adsURL, setAdsURL] = useState(null);

  const [blurMode, setBlurMode] = useState(null);
  const [pausableMode, setPausableMode] = useState(null);
  const [videoWidth, setVideoWidth] = useState(null);
  const [videoBitrate, setVideoBitrate] = useState(null);
  const [audioSampleRate, setAudioSampleRate] = useState(null);
  const [audioBitrate, setAudioBitrate] = useState(null);
  const [videoHeight, setVideoHeight] = useState(null);
  const [liveStreamingEnabled, setLiveStreamingEnabled] = useState(null);
  const [autostartRecording, setAutostartRecording] = useState(null);
  const [startDelay, setStartDelay] = useState(null);
  const [coverSelectorEnabled, setCoverSelectorEnabled] = useState(null);
  const [maxRecordingDuration, setMaxRecordingDuration] = useState(null);
  const [cameraSwitchEnabled, setCameraSwitchEnabled] = useState(null);
  const [sendImmediately, setSendImmediately] = useState(null);
  const [camera, setCamera] = useState(null);
  const [quality, setQuality] = useState(null);

  const [cacheSize, setCacheSize] = useState(null);
  const [cacheRoot, setCacheRoot] = useState(null);

  const [useWifiOnly, setUseWifiOnly] = useState(null);
  const [syncInterval, setSyncInterval] = useState(null);
  const [turnOffUploader, setTurnOffUploader] = useState(null);
  const [lostConnectionAction, setLostConnectionAction] = useState(null);

  const [hidePlayerControls, setHidePlayerControls] = useState(null);
  const [controllerStyle, setControllerStyle] = useState(null);
  const [textColor, setTextColor] = useState(null);
  const [unplayedColor, setUnplayedColor] = useState(null);
  const [playedColor, setPlayedColor] = useState(null);
  const [bufferedColor, setBufferedColor] = useState(null);
  const [tintColor, setTintColor] = useState(null);
  const [muteOffImageDrawable, setMuteOffImageDrawable] = useState(null);
  const [muteOnImageDrawable, setMuteOnImageDrawable] = useState(null);

  const [titleText, setTitleText] = useState(null);
  const [mesResId, setMesResId] = useState(null);
  const [mesText, setMesText] = useState(null);
  const [posBtnResId, setPosBtnResId] = useState(null);
  const [posBtnText, setPosBtnText] = useState(null);
  const [negBtnResId, setNegBtnResId] = useState(null);
  const [negBtnText, setNegBtnText] = useState(null);

  const WrappedText = wrap(Text);

  useEffect(() => {
    tokenLogic();
    clientAuthTokenLogic();
    serverAuthTokenLogic();
    adsURLLogic();
    recorderConfigLogic();
    recorderConfigLogic();
    recorderCacheConfigLogic();
    uploadingConfigLogic();
    playerStyleLogic();
    dialogConfirmStyleLogic();
  }, []);

  function tokenLogic() {
    Ziggeo.setAppToken('TOKEN');
    Ziggeo.getAppToken().then(newToken => {
      setToken(newToken);
    });
  }

  function clientAuthTokenLogic() {
    Ziggeo.setClientAuthToken('Client');
    Ziggeo.getClientAuthToken().then(newToken => {
      setClientAuthToken(newToken);
    });
  }

  function serverAuthTokenLogic() {
    Ziggeo.setServerAuthToken('Server');
    Ziggeo.getServerAuthToken().then(newToken => {
      setServerAuthToken(newToken);
    });
  }

  function adsURLLogic() {
    Ziggeo.setAdsURL('URL');
    Ziggeo.getAdsURL().then(newAdsURL => {
      setAdsURL(newAdsURL);
    });
  }

  function recorderConfigLogic() {
    Ziggeo.setBlurMode(true);
    Ziggeo.getBlurMode().then(data => {
      setBlurMode(data);
    });

    Ziggeo.setPausableMode(false);
    Ziggeo.getPausableMode().then(data => {
      setPausableMode(data);
    });

    Ziggeo.setVideoWidth(1090);
    Ziggeo.getVideoWidth().then(data => {
      setVideoWidth(data);
    });

    Ziggeo.setVideoBitrate(10);
    Ziggeo.getVideoBitrate().then(data => {
      setVideoBitrate(data);
    });

    Ziggeo.setAudioSampleRate(11);
    Ziggeo.getAudioSampleRate().then(data => {
      setAudioSampleRate(data);
    });

    Ziggeo.setAudioBitrate(12);
    Ziggeo.getAudioBitrate().then(data => {
      setAudioBitrate(data);
    });

    Ziggeo.setVideoHeight(13);
    Ziggeo.getVideoHeight().then(data => {
      setVideoHeight(data);
    });

    Ziggeo.setLiveStreamingEnabled(true);
    Ziggeo.getLiveStreamingEnabled().then(data => {
      setLiveStreamingEnabled(data);
    });

    Ziggeo.setAutostartRecordingAfter(0);
    Ziggeo.getAutostartRecording().then(data => {
      setAutostartRecording(data);
    });

    Ziggeo.setStartDelay(5);
    Ziggeo.getStartDelay().then(data => {
      setStartDelay(data);
    });

    Ziggeo.setCoverSelectorEnabled(true);
    Ziggeo.getCoverSelectorEnabled().then(data => {
      setCoverSelectorEnabled(data);
    });

    Ziggeo.setMaxRecordingDuration(50);
    Ziggeo.getMaxRecordingDuration().then(data => {
      setMaxRecordingDuration(data);
    });

    Ziggeo.setCameraSwitchEnabled(true);
    Ziggeo.getCameraSwitchEnabled().then(data => {
      setCameraSwitchEnabled(data);
    });

    Ziggeo.setSendImmediately(true);
    Ziggeo.getSendImmediately().then(data => {
      setSendImmediately(data);
    });

    Ziggeo.setCamera(1);
    Ziggeo.getCamera().then(data => {
      setCamera(data);
    });

    Ziggeo.setQuality(1);
    Ziggeo.getQuality().then(data => {
      setQuality(data);
    });
  }

  function recorderCacheConfigLogic() {
    Ziggeo.setRecorderCacheConfig({
      cache_size: 1234,
      cache_root: 'cache_root_directory',
    });
    Ziggeo.getRecorderCacheConfig().then(dataMap => {
      Object.keys(dataMap).map(key => {
        if (key === 'cache_root') {
          setCacheRoot(dataMap[key]);
        }
        if (key === 'cache_size') {
          setCacheSize(dataMap[key]);
        }
      });
    });
  }

  function uploadingConfigLogic() {
    Ziggeo.setUploadingConfig({
      use_wifi_only: true,
      sync_interval: 6,
      turn_off_uploader: true,
      lost_connection_action: 552,
    });
    Ziggeo.getUploadingConfig().then(dataMap => {
      Object.keys(dataMap).map(key => {
        if (key === 'use_wifi_only') {
          setUseWifiOnly(dataMap[key]);
        }
        if (key === 'sync_interval') {
          setSyncInterval(dataMap[key]);
        }
        if (key === 'turn_off_uploader') {
          setTurnOffUploader(dataMap[key]);
        }
        if (key === 'lost_connection_action') {
          setLostConnectionAction(dataMap[key]);
        }
      });
    });
  }

  function playerStyleLogic() {
    Ziggeo.setThemeArgsForPlayer({
      hidePlayerControls: true,
      controllerStyle: 6,
      textColor: 1234,
      unplayedColor: 1,
      playedColor: 2,
      bufferedColor: 3,
      tintColor: 4,
      muteOffImageDrawable: 5,
      muteOnImageDrawable: 6,
    });
    Ziggeo.getThemeArgsForPlayer().then(dataMap => {
      Object.keys(dataMap).map(key => {
        if (key === 'hidePlayerControls') {
          setHidePlayerControls(dataMap[key]);
        }
        if (key === 'controllerStyle') {
          setControllerStyle(dataMap[key]);
        }
        if (key === 'textColor') {
          setTextColor(dataMap[key]);
        }
        if (key === 'unplayedColor') {
          setUnplayedColor(dataMap[key]);
        }
        if (key === 'playedColor') {
          setPlayedColor(dataMap[key]);
        }
        if (key === 'bufferedColor') {
          setBufferedColor(dataMap[key]);
        }
        if (key === 'tintColor') {
          setTintColor(dataMap[key]);
        }
        if (key === 'muteOffImageDrawable') {
          setMuteOffImageDrawable(dataMap[key]);
        }
        if (key === 'muteOnImageDrawable') {
          setMuteOnImageDrawable(dataMap[key]);
        }
      });
    });
  }

  function dialogConfirmStyleLogic() {
    Ziggeo.setStopRecordingConfirmationDialogConfig({
      title_text: 'title_text',
      mes_res_id: 123,
      mes_text: 'mes_text',
      pos_btn_res_id: 456,
      pos_btn_text: 'pos_btn_text',
      neg_btn_res_id: 789,
      neg_btn_text: 'neg_btn_text',
    });
    Ziggeo.getStopRecordingConfirmationDialogConfig().then(dataMap => {
      Object.keys(dataMap).map(key => {
        if (key === 'title_text') {
          setTitleText(dataMap[key]);
        }
        if (key === 'mes_res_id') {
          setMesResId(dataMap[key]);
        }
        if (key === 'mes_text') {
          setMesText(dataMap[key]);
        }
        if (key === 'pos_btn_res_id') {
          setPosBtnResId(dataMap[key]);
        }
        if (key === 'pos_btn_text') {
          setPosBtnText(dataMap[key]);
        }
        if (key === 'neg_btn_res_id') {
          setNegBtnResId(dataMap[key]);
        }
        if (key === 'neg_btn_text') {
          setNegBtnText(dataMap[key]);
        }
      });
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{'TEST'}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <WrappedText ref={generateTestHook('Token')} style={styles.item}>
            {token}
          </WrappedText>
          <WrappedText
            ref={generateTestHook('ClientAuthToken')}
            style={styles.item}>
            {clientAuthToken}
          </WrappedText>
          <WrappedText
            ref={generateTestHook('ServerAuthToken')}
            style={styles.item}>
            {serverAuthToken}
          </WrappedText>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <WrappedText ref={generateTestHook('AdsURL')} style={styles.item}>
            {adsURL}
          </WrappedText>
          {blurMode != null && (
            <WrappedText ref={generateTestHook('blurMode')} style={styles.item}>
              {blurMode.toString()}
            </WrappedText>
          )}
          {pausableMode != null && (
            <WrappedText
              ref={generateTestHook('pausableMode')}
              style={styles.item}>
              {pausableMode.toString()}
            </WrappedText>
          )}
          <WrappedText ref={generateTestHook('videoWidth')} style={styles.item}>
            {videoWidth}
          </WrappedText>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <WrappedText
            ref={generateTestHook('videoBitrate')}
            style={styles.item}>
            {videoBitrate}
          </WrappedText>
          <WrappedText
            ref={generateTestHook('audioSampleRate')}
            style={styles.item}>
            {audioSampleRate}
          </WrappedText>
          <WrappedText
            ref={generateTestHook('audioBitrate')}
            style={styles.item}>
            {audioBitrate}
          </WrappedText>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <WrappedText
            ref={generateTestHook('videoHeight')}
            style={styles.item}>
            {videoHeight}
          </WrappedText>
          {liveStreamingEnabled != null && (
            <WrappedText
              ref={generateTestHook('liveStreamingEnabled')}
              style={styles.item}>
              {liveStreamingEnabled.toString()}
            </WrappedText>
          )}
          {autostartRecording != null && (
            <WrappedText
              ref={generateTestHook('autostartRecording')}
              style={styles.item}>
              {autostartRecording.toString()}
            </WrappedText>
          )}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <WrappedText ref={generateTestHook('startDelay')} style={styles.item}>
            {startDelay}
          </WrappedText>
          {coverSelectorEnabled != null && (
            <WrappedText
              ref={generateTestHook('coverSelectorEnabled')}
              style={styles.item}>
              {coverSelectorEnabled.toString()}
            </WrappedText>
          )}
          <WrappedText
            ref={generateTestHook('maxRecordingDuration')}
            style={styles.item}>
            {maxRecordingDuration}
          </WrappedText>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {cameraSwitchEnabled != null && (
            <WrappedText
              ref={generateTestHook('cameraSwitchEnabled')}
              style={styles.item}>
              {cameraSwitchEnabled.toString()}
            </WrappedText>
          )}
          {sendImmediately != null && (
            <WrappedText
              ref={generateTestHook('sendImmediately')}
              style={styles.item}>
              {sendImmediately.toString()}
            </WrappedText>
          )}
          <WrappedText ref={generateTestHook('camera')} style={styles.item}>
            {camera}
          </WrappedText>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <WrappedText ref={generateTestHook('quality')} style={styles.item}>
            {quality}
          </WrappedText>
          <WrappedText ref={generateTestHook('cache_size')} style={styles.item}>
            {cacheSize}
          </WrappedText>
          <WrappedText ref={generateTestHook('cache_root')} style={styles.item}>
            {cacheRoot}
          </WrappedText>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {useWifiOnly != null && (
            <WrappedText
              ref={generateTestHook('use_wifi_only')}
              style={styles.item}>
              {useWifiOnly.toString()}
            </WrappedText>
          )}
          <WrappedText
            ref={generateTestHook('sync_interval')}
            style={styles.item}>
            {syncInterval}
          </WrappedText>
          {turnOffUploader != null && (
            <WrappedText
              ref={generateTestHook('turn_off_uploader')}
              style={styles.item}>
              {turnOffUploader.toString()}
            </WrappedText>
          )}
          {lostConnectionAction != null && (
            <WrappedText
              ref={generateTestHook('lost_connection_action')}
              style={styles.item}>
              {lostConnectionAction.toString()}
            </WrappedText>
          )}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {hidePlayerControls != null && (
            <WrappedText
              ref={generateTestHook('hidePlayerControls')}
              style={styles.item}>
              {hidePlayerControls.toString()}
            </WrappedText>
          )}
          <WrappedText
            ref={generateTestHook('controllerStyle')}
            style={styles.item}>
            {controllerStyle}
          </WrappedText>
          <WrappedText ref={generateTestHook('textColor')} style={styles.item}>
            {textColor}
          </WrappedText>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <WrappedText
            ref={generateTestHook('unplayedColor')}
            style={styles.item}>
            {unplayedColor}
          </WrappedText>
          <WrappedText
            ref={generateTestHook('playedColor')}
            style={styles.item}>
            {playedColor}
          </WrappedText>
          <WrappedText
            ref={generateTestHook('bufferedColor')}
            style={styles.item}>
            {bufferedColor}
          </WrappedText>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <WrappedText ref={generateTestHook('tintColor')} style={styles.item}>
            {tintColor}
          </WrappedText>
          <WrappedText
            ref={generateTestHook('muteOffImageDrawable')}
            style={styles.item}>
            {muteOffImageDrawable}
          </WrappedText>
          <WrappedText
            ref={generateTestHook('muteOnImageDrawable')}
            style={styles.item}>
            {muteOnImageDrawable}
          </WrappedText>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <WrappedText ref={generateTestHook('titleText')} style={styles.item}>
            {titleText}
          </WrappedText>
          <WrappedText ref={generateTestHook('mesResId')} style={styles.item}>
            {mesResId}
          </WrappedText>
          <WrappedText ref={generateTestHook('mesText')} style={styles.item}>
            {mesText}
          </WrappedText>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <WrappedText
            ref={generateTestHook('posBtnResId')}
            style={styles.item}>
            {posBtnResId}
          </WrappedText>
          <WrappedText ref={generateTestHook('posBtnText')} style={styles.item}>
            {posBtnText}
          </WrappedText>
          <WrappedText
            ref={generateTestHook('negBtnResId')}
            style={styles.item}>
            {negBtnResId}
          </WrappedText>
          <WrappedText ref={generateTestHook('negBtnText')} style={styles.item}>
            {negBtnText}
          </WrappedText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingTop: 20,
  },
  item: {flex: 1, flexDirection: 'row'},
  header: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FAFAFF',
    paddingBottom: 4,
    borderBottomColor: '#F2F2F7',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  picture: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  smallPicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  bigText: {
    fontSize: 20,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#AAAAAA',
  },
  list: {
    flex: 1,
  },
  emptyList: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lightText: {
    color: '#C7C7CC',
  },
});
