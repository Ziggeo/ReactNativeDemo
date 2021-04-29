import {ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Strings from '../../Strings';
import CardView from 'react-native-cardview';
import Ziggeo from 'react-native-ziggeo-library';
import {connect} from 'react-redux';
import styles from './styles';
import {requestRecs} from './actions';
import Theme from '../../Theme';
import {format} from 'date-fns';
import Routes from '../../Routes';
import Spinner from 'react-native-loading-spinner-overlay';
import Text from '../../ui/Text';
import createToolbar from '../../ui/Toolbar';
import {addLog} from '../logs/storage';

export class Recordings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscriptions: [],
            isLoading: false,
            recordings: null,
            audioRecordings: null,
            images: null,
            error: null,
        };
    }

    componentDidMount(): void {
        this.subscribeForEvents();
    }

    componentWillUnmount(): void {
        this.unsubscribeFromEvents();
    }

    onFolderPressed() {
        Ziggeo.uploadFromFileSelector(null);
    }

    onImagePressed() {
        Ziggeo.startImageRecorder();
    }

    onAudioPressed() {
        Ziggeo.startAudioRecorder();
    }

    onScreenPressed() {
        Ziggeo.startScreenRecorder();
    }

    onCameraPressed() {
        Ziggeo.record();
    }

    subscribeForEvents() {
        const recorderEmitter = Ziggeo.recorderEmitter();
        let subscription = recorderEmitter.addListener(
            'UploadProgress',
            progress => {
                addLog(
                    Strings.evUplUploadProgress,
                    progress.token + ' ' + progress.bytesSent + '/' + progress.totalBytes,
                );
                console.log(
                    progress.fileName +
                    ' uploaded ' +
                    progress.bytesSent +
                    ' from ' +
                    progress.totalBytes +
                    ' total bytes',
                );
            },
        );
        this.addSubscription(subscription);
        subscription = recorderEmitter.addListener('Verified', data => {
            addLog(Strings.evUplVerified, data.token);
            console.log('Verified:' + data.token);
        });
        this.addSubscription(subscription);
        subscription = recorderEmitter.addListener('Processed', data => {
            addLog(Strings.evUplProcessed, data.token);
            console.log('Processed:' + data.token);
        });
        this.addSubscription(subscription);
        subscription = recorderEmitter.addListener('Processing', data => {
            addLog(Strings.evUplProcessing, data.token);
            console.log('Processing:' + data.token);
        });
        this.addSubscription(subscription);
        subscription = this.props.navigation.addListener('willFocus', () => {
            this.props.requestRecs();
        });
        this.addSubscription(subscription);
    }

    addSubscription(subscription) {
        this.state.subscriptions.push(subscription);
    }

    unsubscribeFromEvents() {
        for (let i = 0; i < this.state.subscriptions.length; i++) {
            let subs = this.state.subscriptions[i];
            subs.remove();
        }
    }

    render() {
        const {isLoading, recordings, audioRecordings, images, error} = this.props;
        return (
            <View style={styles.container}>
                {createToolbar(Strings.titleRecordings, this.props)}
                {isLoading && this.renderLoading()}
                {this.renderList(recordings, audioRecordings, images)}
                {error && this.renderError(error.message)}
                <ActionButton buttonColor={Theme.colors.accent}>
                    <ActionButton.Item
                        size={Theme.size.smallFabSize}
                        onPress={() => this.onFolderPressed()}>
                        <Icon name="folder" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item
                        size={Theme.size.smallFabSize}
                        onPress={() => this.onImagePressed()}>
                        <Icon name="image" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item
                        size={Theme.size.smallFabSize}
                        onPress={() => {
                            this.onAudioPressed();
                        }}>
                        <Icon name="microphone" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item
                        size={Theme.size.smallFabSize}
                        onPress={() => {
                            this.onScreenPressed();
                        }}>
                        <Icon name="monitor" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                    <ActionButton.Item
                        size={Theme.size.smallFabSize}
                        onPress={() => {
                            this.onCameraPressed();
                        }}>
                        <Icon name="video" style={styles.actionButtonIcon}/>
                    </ActionButton.Item>
                </ActionButton>
            </View>
        );
    }

    renderLoading() {
        return <Spinner visible={true}/>;
    }

    renderList(recordings, audioRecordings, images) {
        // this.props.route.params
        return (
            <View>
                {(!recordings || (recordings.length === 0)
                    && (!audioRecordings || (audioRecordings.length === 0))
                    && (!images || (images.length === 0))
                    && (
                        <Text style={Theme.styles.emptyMessage}>
                            {Strings.messageRecordingsListEmpty}
                        </Text>
                    ))}
                {
                    (((recordings && recordings.length > 0) || (audioRecordings && audioRecordings.length > 0) || (images && images.length > 0)) && (
                        <ScrollView showsVerticalScrollIndicator={true}>
                            <View style={styles.ListView}>
                                {recordings.map((item) => {
                                    return this.renderItem(item, "video");
                                })}
                            </View>
                            <View style={styles.ListView}>
                                {audioRecordings && audioRecordings.map((item) => {
                                    return this.renderItem(item, "audio");
                                })}
                            </View>
                            <View style={styles.ListView}>
                                {images && images.map((item) => {
                                    return this.renderItem(item, "image");
                                })}
                            </View>
                        </ScrollView>
                    ))

                }
            </View>
        );
    }

    renderError(message) {
        return <Text style={styles.emptyMessage}>{message}</Text>;
    }

    renderItem(item, iconName) {
        return (
            <TouchableOpacity
                key={item.token}
                onPress={() => {
                    const {navigation} = this.props;
                    navigation.navigate(Routes.RecordingDetails, {
                        model: item,
                        fileType: iconName
                    });
                }}>
                <CardView
                    style={styles.card}
                    cardElevation={Theme.size.itemElevation}
                    cornerRadius={Theme.size.itemCornerRadius}>
                    <Icon name={((iconName === "audio") && "microphone") || ((iconName !== "audio") && iconName)}
                          style={styles.listItemIcon}/>
                    <View
                        style={{
                            height: Theme.size.listItemContentHeight,
                            justifyContent: 'center',
                        }}>
                        {item.key ? (
                            <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={{width: Theme.size.tokenLineWidth}}>
                                {item.key}
                            </Text>
                        ) : (
                            <Text
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                style={{width: Theme.size.tokenLineWidth}}>
                                {item.token}
                            </Text>
                        )}
                        {item.tags && <Text>{item.tags}</Text>}
                    </View>
                    <View
                        style={{
                            height: Theme.size.listItemContentHeight,
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <Text>{item.state_string}</Text>
                        <Text>
                            {format(new Date(item.created * 1000), 'dd.MM.yyyy HH:mm')}
                        </Text>
                    </View>
                </CardView>
            </TouchableOpacity>
        );
    }

}

const mapStateToProps = ({recs}) => recs;
export default connect(
    mapStateToProps,
    {
        requestRecs,
    },
)(Recordings);
