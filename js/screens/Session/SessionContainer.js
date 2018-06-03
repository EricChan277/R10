import React, { Component } from 'react';
import Session from './Session';

import { View, Text } from 'react-native';

class SessionContainer extends Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.state.params.title;
    const id = navigation.state.params.id;
    const description = navigation.state.params.description;
    const time = navigation.state.params.time;
    const location = navigation.state.params.location;
    const speaker = navigation.state.params.speaker;

    return (
      <View>
        <Session
          title={title}
          id={id}
          description={description}
          time={time}
          location={location}
          speaker={speaker}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
export default SessionContainer;
