import React, { Component } from 'react';
import { View } from 'react-native';

import PropTypes from 'prop-types';
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

SpeakerContainer.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])).isRequired
};

export default SpeakerContainer;
