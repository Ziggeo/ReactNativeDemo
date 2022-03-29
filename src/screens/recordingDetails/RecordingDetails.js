import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Strings from '../../Strings';
import Theme from '../../Theme';
import Ziggeo from 'react-native-ziggeo-library';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toolbar from 'react-native-material-ui/src/Toolbar/Toolbar.react';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Text from '../../ui/Text';
import createTextField from '../../ui/TextField';
import {textFontStyle} from '../../ui/textFontStyle';
import {getCustomVideoMode} from '../../utils/storage';
import Routes from '../../Routes';
import connect from 'react-redux/lib/connect/connect';
import {
  cancelEditing,
  deleteVideo,
  editInfo,
  loadInfo,
  updateInfo,
} from './actions';

class RecordingDetails extends React.Component {
    constructor(props) {
        super(props);
        this.onKeyChanged = this.onKeyChanged.bind(this);
        this.onTitleChanged = this.onTitleChanged.bind(this);
        this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
        this.state = {
            model: this.props.navigation.state.params,
        };
    }

    componentDidMount(): void {
        this._unsubscribe = this.props.navigation.addListener('willFocus', () => {
            this.props.loadInfo(this.props.navigation.state.params);
        });
    }

    componentWillUnmount(): void {
        this._unsubscribe.remove();
    }

    onKeyChanged(text) {
        let updModel = this.state.model;
        updModel.key = text;
        this.setState({
            model: updModel,
        });
    }

    onTitleChanged(text) {
        let updModel = this.state.model;
        updModel.title = text;
        this.setState({
            model: updModel,
        });
    }

    onDescriptionChanged(text) {
        let updModel = this.state.model;
        updModel.description = text;
        this.setState({
            model: updModel,
        });
    }

    renderLoading() {
        return <Spinner visible={true}/>;
    }

    static navigationOptions = {
        headerShown: false,
    };

    renderToolbar(isEditMode, model) {
        return (
            <Toolbar
                style={{container: {backgroundColor: Theme.colors.primary}}}
                onLeftElementPress={() => {
                    !isEditMode
                        ? this.props.navigation.goBack()
                        : this.props.cancelEditing();
                }}
                rightElement={{
                    actions: !isEditMode ? ['edit', 'delete'] : ['save'],
                }}
                onRightElementPress={element => {
                    if (element.action === 'edit') {
                        this.props.editInfo();
                    } else if (element.action === 'delete') {
                        this.props.deleteVideo(model, () => {
                            this.props.navigation.goBack();
                        });
                    } else if (element.action === 'save') {
                        this.props.updateInfo(model);
                    }
                }}
                leftElement={!isEditMode ? 'arrow-back' : 'close'}
                centerElement={
                    <Text
                        style={[
                            textFontStyle.textStyle,
                            {
                                color: Theme.colors.white,
                                fontSize: Theme.size.toolbarTextSize,
                            },
                        ]}>
                        {Strings.titleDetails}
                    </Text>
                }
            />
        );
    }

    render() {
        const {imageUrl, isLoading, isEditMode} = this.props;
        const {model} = this.state;
        return (
            <KeyboardAwareScrollView>
                <View>
                    {this.renderToolbar(isEditMode, model)}
                    <ScrollView style={styles.container}>
                        {isLoading && this.renderLoading()}
                        {model && (
                            <View>
                                <TouchableOpacity
                                    style={{alignContent: 'center'}}
                                    onPress={ async () =>
                                        (model.fileType === 'video' &&
                                            ((await getCustomVideoMode() &&
                                                    (() => {
                                                            const {navigation} = this.props;
                                                            navigation.navigate(Routes.CustomVideo, {
                                                                    videoToken: model.token,
                                                                    videoPath: null,
                                                                }
                                                            );
                                                        }
                                                    )
                                                    ||
                                                    Ziggeo.playVideo(model.model.token)
                                                )
                                            )
                                        ) ||
                                            (model.fileType === 'audio' &&
                                                Ziggeo.startAudioPlayer(model.model.token)) ||
                                            (model.fileType === 'image' &&
                                                Ziggeo.showImage(model.model.token))
                                    }>
                                    {(imageUrl && (
                                        <Image
                                            style={styles.preview}
                                            source={{
                                                uri: imageUrl,
                                            }}
                                        />
                                    )) ||
                                    (model.fileType === 'audio' && (
                                        <Icon
                                            style={{alignSelf: 'center'}}
                                            size={Theme.size.previewHeight}
                                            name={'microphone'}
                                            color={'grey'}
                                        />
                                    ))}
                                    <View style={styles.overlay}>
                                        <Icon size={Theme.size.hugeIconSize} name="play-circle"/>
                                    </View>
                                </TouchableOpacity>
                                {createTextField({
                                    disabled: true,
                                    label: Strings.hintToken,
                                    onSubmitEditing: this.onSubmit,
                                    textColor: Theme.colors.accent,
                                    value: model.token,
                                    onChangeText: this.onTitleChanged,
                                })}
                                {createTextField({
                                    disabled: !isEditMode,
                                    label: Strings.hintKey,
                                    onSubmitEditing: this.onSubmit,
                                    textColor: Theme.colors.accent,
                                    value: model.key,
                                    onChangeText: this.onKeyChanged,
                                })}
                                {createTextField({
                                    disabled: !isEditMode,
                                    label: Strings.hintTitle,
                                    onSubmitEditing: this.onSubmit,
                                    textColor: Theme.colors.accent,
                                    value: model.title,
                                    onChangeText: this.onTitleChanged,
                                })}
                                {createTextField({
                                    disabled: !isEditMode,
                                    label: Strings.hintDescription,
                                    onSubmitEditing: this.onSubmit,
                                    textColor: Theme.colors.accent,
                                    value: model.description,
                                    onChangeText: this.onDescriptionChanged,
                                })}
                            </View>
                        )}
                    </ScrollView>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const mapStateToProps = ({recd}) => recd;

export default connect(
    mapStateToProps,
    {
        loadInfo,
        cancelEditing,
        editInfo,
        updateInfo,
        deleteVideo,
    },
)(RecordingDetails);
