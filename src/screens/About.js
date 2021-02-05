import {Linking, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import Strings from '../Strings';
import createToolbar from '../ui/Toolbar';
import Theme from '../Theme';
import Text from '../ui/Text';
import Hyperlink from 'react-native-hyperlink';

export class About extends React.Component {
  render() {
    return (
      <View style={{height: '100%'}}>
        {createToolbar(Strings.titleAbout, this.props)}
        <ScrollView>
          <View style={styles.container}>
            <Text style={Theme.styles.subtitle}>{Strings.aboutSubtitle}</Text>
            <Hyperlink
              onPress={url => Linking.openURL(url)}
              linkStyle={{color: Theme.colors.primary}}
              linkText={url => {
                switch (url) {
                  case 'https://github.com/Ziggeo/Android-Client-SDK':
                    return 'GitHub';
                  case 'https://ziggeo.com/quickstart':
                    return 'Quick start';
                  case 'https://ziggeo.com/screencasts':
                    return 'Screencasts';
                  case 'https://ziggeo.com/webinars':
                    return 'Webinars';
                  case 'https://ziggeo.com/docs':
                    return 'Documentation';
                  case 'https://support.ziggeo.com':
                    return 'FAQs';
                  case 'https://ziggeo.com/integrations':
                    return 'Integrations';
                  case 'https://ziggeo.com/sandbox/configuration':
                    return 'Configuration';
                  case 'https://ziggeo.com/sandbox/serverside':
                    return 'Server-Side';
                  case 'https://ziggeo.com/sandbox/authorization-tokens':
                    return 'Authorization Tokens';
                  case 'https://ziggeo.com/sandbox/webhooks':
                    return 'Webhooks Builder';
                  case 'https://support.ziggeo.com/hc/en-us/community/posts':
                    return 'Forum';
                  case 'https://stackoverflow.com/search?q=ziggeo':
                    return 'StackOverflow';
                  case 'mailto:support@ziggeo.com':
                    return 'Support';
                  case 'https://ziggeo.com/dev-updates':
                    return 'Dev Updates';
                  default:
                    return url;
                }
              }}>
              <Text style={Theme.styles.message}>{Strings.aboutText}</Text>
            </Hyperlink>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: Theme.size.commonMargin,
    alignItems: 'center',
    flex: 1,
  },
});
