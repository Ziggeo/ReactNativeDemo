import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {cancelEditing, deleteVideo, editInfo, loadInfo, updateInfo,} from './actions';
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

class RecordingDetails extends React.Component {
    constructor(props) {
        super(props);
        this.onTitleChanged = this.onTitleChanged.bind(this);
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
        this.props.model.model.key = text;
    }

    onTitleChanged(text) {
        this.props.model.model.title = text;
    }

    onDescriptionChanged(text) {
        this.props.model.model.description = text;
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
        const {model, imageUrl, isLoading, isEditMode} = this.props;
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
                                    onPress={() => (imageUrl && Ziggeo.play(model.model.token)) ||
                                        (model.fileType === "audio" && Ziggeo.startAudioPlayer(model.model.token)) ||
                                        (model.fileType === "image" && Ziggeo.showImage(model.model.token))}>
                                    {(imageUrl && (
                                        <Image
                                            style={styles.preview}
                                            source={{
                                                uri: imageUrl,
                                            }}
                                        />
                                    )) || (!imageUrl && (
                                        <Image
                                            style={styles.preview}
                                            source={"image.png"}
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
                                    value: model.model.token,
                                    onChangeText: this.onTitleChanged,
                                })}
                                {createTextField({
                                    disabled: !isEditMode,
                                    label: Strings.hintKey,
                                    onSubmitEditing: this.onSubmit,
                                    textColor: Theme.colors.accent,
                                    value: model.model.key,
                                    onChangeText: this.onKeyChanged,
                                })}
                                {createTextField({
                                    disabled: !isEditMode,
                                    label: Strings.hintTitle,
                                    onSubmitEditing: this.onSubmit,
                                    textColor: Theme.colors.accent,
                                    value: model.model.title,
                                    onChangeText: this.onTitleChanged,
                                })}
                                {createTextField({
                                    disabled: !isEditMode,
                                    label: Strings.hintDescription,
                                    onSubmitEditing: this.onSubmit,
                                    textColor: Theme.colors.accent,
                                    value: model.model.description,
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
