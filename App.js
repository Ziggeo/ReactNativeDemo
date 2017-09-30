import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeEventEmitter, NativeModules } from 'react-native';
import Ziggeo from 'react-native-ziggeo-library';

export default class App extends React.Component {
    async record() {
        var appToken = "ZIGGEO_APP_TOKEN";
        Ziggeo.setAppToken(appToken);
        Ziggeo.setCameraSwitchEnabled(true);
        Ziggeo.setCoverSelectorEnabled(true);
        Ziggeo.setCamera(Ziggeo.REAR_CAMERA);
        const recorderEmitter = Ziggeo.recorderEmitter();
        const subscription = recorderEmitter.addListener('UploadProgress',(progress)=>console.log(progress.fileName + " uploaded " + progress.bytesSent + " from " + progress.totalBytes + " total bytes"));
        try
        {
            //record and upload the video and return its token
            var token = await Ziggeo.record();
            console.log("Token:"+token);
            if (token !== 'null'){
                Ziggeo.play(token);
            }
        }
        catch(e)
        {
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
            var token = await Ziggeo.upload();
            console.log("Token:"+token);
            if (token !== 'null'){
                Ziggeo.play(token);
            }
        }
        catch(e)
        {
            //uploading error or upload was cancelled by user
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
            //upload some file by its name and return its token
            var token = await Ziggeo.upload("FILE_NAME");
            console.log("Token:"+token);
            if (token !== 'null'){
                Ziggeo.play(token);
            }
        }
        catch(e)
        {
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
            onPress={this.upload}
            title="Upload from library"
            accessibilityLabel="Upload"
            />
            <Button
            onPress={this.uploadFile}
            title="Upload file"
            accessibilityLabel="Upload file"
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
