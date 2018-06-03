import React, { Component } from 'react';
import { View } from 'react-native';

import Speaker from './Speaker';

class SpeakerContainer extends Component {
  render() {
    const { navigation } = this.props;
    const speaker = navigation.getParam('speaker', 'NO-SPEAKER');
    return (
      <View>
        <Speaker speaker={speaker} navigation={navigation} />
      </View>
    );
  }
}

export default SpeakerContainer;
