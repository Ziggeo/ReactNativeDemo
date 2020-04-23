import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {cancelEditing, editInfo, loadInfo, saveInfo} from './actions';
import styles from './styles';
import {OutlinedTextField} from 'react-native-material-textfield';
import Strings from '../../Strings';
import Theme from '../../Theme';
import Loading from '../../components/common/Loading/Loading';

class RecordingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.onTitleChanged = this.onTitleChanged.bind(this);
  }
  componentDidMount(): void {
    this.props.loadInfo(this.props.navigation.state.params);
  }

  onKeyChanged(text) {
    this.props.model.key = text;
  }

  onTitleChanged(text) {
    this.props.model.title = text;
  }

  onDescriptionChanged(text) {
    this.props.model.description = text;
  }

  renderLoading() {
    return <Loading styles={{padding: Theme.size.commonHalfMargin}} />;
  }

  render() {
    const {model, imageUrl, isLoading, isEditMode} = this.props;
    return (
      <View style={styles.container}>
        {isLoading && this.renderLoading()}
        {model && (
          <View>
            <TouchableOpacity>
              {imageUrl && (
                <Image
                  style={styles.preview}
                  source={{
                    uri: imageUrl,
                    // 'https://dev.by/storage/images/66/10/31/61/original/aa6a88fb6fa70ce561c46b133899845d.jpg',
                  }}
                />
              )}
            </TouchableOpacity>
            <OutlinedTextField
              disabled={true}
              label={Strings.hintToken}
              onSubmitEditing={this.onSubmit}
              textColor={Theme.colors.accent}
              value={model.token}
            />
            <OutlinedTextField
              disabled={!isEditMode}
              label={Strings.hintOrKey}
              onSubmitEditing={this.onSubmit}
              textColor={Theme.colors.accent}
              onChangeText={this.onKeyChanged}
              value={model.key}
            />
            <OutlinedTextField
              disabled={!isEditMode}
              label={Strings.hintTitle}
              onSubmitEditing={this.onSubmit}
              textColor={Theme.colors.accent}
              onChangeText={this.onTitleChanged}
              value={model.title}
            />
            <OutlinedTextField
              disabled={!isEditMode}
              label={Strings.hintDescription}
              onSubmitEditing={this.onSubmit}
              textColor={Theme.colors.accent}
              onChangeText={this.onDescriptionChanged}
              value={model.description}
            />
          </View>
        )}
      </View>
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
    saveInfo,
  },
)(RecordingDetails);
