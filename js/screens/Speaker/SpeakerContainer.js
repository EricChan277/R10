import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Speaker from './Speaker';

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam('speaker', 'NO-SPEAKER');
    return (
      <View>
        <Speaker speaker={speaker} />
      </View>
    );
  }
}

export default SpeakerContainer;
