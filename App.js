import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeEventEmitter, NativeModules } from 'react-native';
import Ziggeo from 'react-native-ziggeo-library';

export default class App extends React.Component {
    async record() {
        var appToken = "ZIGGEP_APP_TOKEN";
        Ziggeo.setAppToken(appToken);
        Ziggeo.setCameraSwitchEnabled(true);
        Ziggeo.setCoverSelectorEnabled(false);
        Ziggeo.setCamera(Ziggeo.REAR_CAMERA);
        Ziggeo.setQuality(Ziggeo.HIGH_QUALITY);
        Ziggeo.setMaxRecordingDuration(600);
        var argsMap = {
            tags: "test",
            expiration_days: 1,
            video_profile: "_video_profile_lightweight",
            auto_pad: true,
            data: '{"source":"app"}'
        };
        Ziggeo.setExtraArgsForRecorder(argsMap);
        const recorderEmitter = Ziggeo.recorderEmitter();
        const subscription = recorderEmitter.addListener('UploadProgress',(progress)=>console.log(progress.fileName + " uploaded " + progress.bytesSent + " from " + progress.totalBytes + " total bytes"));
        try
        {
            //record and upload the video and return its token
            var token = await Ziggeo.record();
            console.log("Token:"+token);
            if (token){
                Ziggeo.play(token);
            }
        }
        catch(e)
        {
            console.log("Error:"+e);
            //recorder error or recording was cancelled by user
            alert(e);
        }
    }

    async recordNoControls() {
        var appToken = "ZIGGEO_APP_TOKEN";
        Ziggeo.setAppToken(appToken);
        Ziggeo.setCameraSwitchEnabled(true);
        Ziggeo.setCoverSelectorEnabled(true);
        Ziggeo.setCamera(Ziggeo.REAR_CAMERA);
        Ziggeo.setMaxRecordingDuration(10);
        Ziggeo.setThemeArgsForRecorder({"hideRecorderControls":true});
        const recorderEmitter = Ziggeo.recorderEmitter();
        const subscription = recorderEmitter.addListener('UploadProgress',(progress)=>console.log(progress.fileName + " uploaded " + progress.bytesSent + " from " + progress.totalBytes + " total bytes"));
        try
        {
            //record and upload the video and return its token
            var token = await Ziggeo.record();
            console.log("Token:"+token);
            if (token){
                Ziggeo.play(token);
            }
        }
        catch(e)
        {
            console.log("Error:"+e);
            //recorder error or recording was cancelled by user
            alert(e);
        }
    }
    
    async upload() {
        var appToken = "ZIGGEO_APP_TOKEN";
        Ziggeo.setAppToken(appToken);
        const recorderEmitter = Ziggeo.recorderEmitter();
        const subscription = recorderEmitter.addListener('UploadProgress',(progress)=>console.log(progress.fileName + " uploaded " + progress.bytesSent + " from " + progress.totalBytes + " total bytes"));
        try
        {
            //select and upload the video and return its token
            var argsMap = {"max_duration":15,"enforce_duration":true, 'tags': 'TEST_TAG'}
            var token = await Ziggeo.uploadFromFileSelector(argsMap);
            console.log("Token:"+token);
            if (token){
                Ziggeo.play(token);
            }
        }
        catch(e)
        {
            console.log("Error:"+e);
            //uploading error or upload was cancelled by user
            alert(e);
        }
    }
    
    async play() {
        var appToken = "ZIGGEO_APP_TOKEN";
        var videoToken = "ZIGGEO_VIDEO_TOKEN";
        Ziggeo.setAppToken(appToken);
        try
        {
            Ziggeo.play(videoToken);
        }
        catch(e)
        {
            console.log("Error:"+e);
            alert(e);
        }
    }

    async playNoControls() {
        var appToken = "ZIGGEO_APP_TOKEN";
        var videoToken = "ZIGGEO_VIDEO_TOKEN";
        Ziggeo.setAppToken(appToken);
        try
        {
            Ziggeo.setThemeArgsForPlayer({"hidePlayerControls":true});
            Ziggeo.play(videoToken);
        }
        catch(e)
        {
            console.log("Error:"+e);
            alert(e);
        }
    }

    async uploadFile() {
        var appToken = "ZIGGEO_APP_TOKEN";
        Ziggeo.setAppToken(appToken);
        const recorderEmitter = Ziggeo.recorderEmitter();
        const subscription = recorderEmitter.addListener('UploadProgress',(progress)=>console.log(progress.fileName + " uploaded " + progress.bytesSent + " from " + progress.totalBytes + " total bytes"));
        try
        {
            //upload some file by its path and return its token
            var filePath = ""
            var argsMap = {"max_duration":15,"enforce_duration":true, 'tags': 'TEST_TAG'}
            var token = await Ziggeo.uploadFromPath(filePath, argsMap); 
            console.log("Token:"+token);
            if (token){
                Ziggeo.play(token);
            }
        }
        catch(e)
        {
            console.log("Error:"+e);
            //uploading error or upload was cancelled by user
            alert(e);
        }
    }

    
    
    render() {
        return (
          <View style={styles.container}>
            <Button
            onPress={this.record}
            title="Record"
            accessibilityLabel="Record"
            />
            <Button
            onPress={this.recordNoControls}
            title="Record without controls"
            accessibilityLabel="Record (10 sec, no controls)"
            />
            <Button
            onPress={this.upload}
            title="Upload from library"
            accessibilityLabel="Upload"
            />
            <Button
            onPress={this.uploadFile}
            title="Upload file"
            accessibilityLabel="Upload file"
            />
            <Button
            onPress={this.play}
            title="Play video"
            accessibilityLabel="Play video"
            />
            <Button
            onPress={this.playNoControls}
            title="Play video without controls"
            accessibilityLabel="Play video without controls"
            />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
