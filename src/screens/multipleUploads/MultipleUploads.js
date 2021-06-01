import {Button, View} from 'react-native';
import React from 'react';
import Ziggeo from 'react-native-ziggeo-library';
import styles from './styles';
import RNFetchBlob from "rn-fetch-blob";
import {requestRecs} from './actions';
import {connect} from 'react-redux';

export class MultipleUploads extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.btnPress} title={'Upload'}/>
      </View>
    );
  }

  btnPress() {
    let url = "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_480_1_5MG.mp4"

    const { config, fs } = RNFetchBlob

    var uploadDir = fs.dirs.DocumentDir;

    console.log('Video file name:', uploadDir);

    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true, // setting it to true will use the device's native download manager and will be shown in the notification bar.
        notification: false,
        path: uploadDir,
        description: 'Downloading video.'
      }
    }

    config(options).fetch('GET', url)
        .then((res) => {
          let status = res.info().status;

          if (status !== 200) {
            return console.log(`ERROR ${status}`)
          }

          console.log(`Successfully downloaded video. File path:`, res.data);

            uploadVideos(res);

        })
        .catch((errorMessage, statusCode) => {
          console.log("Error when downloading file", errorMessage, statusCode);
        })
  }

}

async function uploadVideos(res) {
    for (let i = 0; i < 10; i++) {
        try {
            await Ziggeo.uploadFromPath(res.data)
        } catch (error) {
            console.log("Error when uploading file", error);
        }
    }
}

const mapStateToProps = ({recs}) => recs;
export default connect(
    mapStateToProps,
    {
      requestRecs,
    },
)(MultipleUploads);
