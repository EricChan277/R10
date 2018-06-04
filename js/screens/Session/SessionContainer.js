import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { View } from 'react-native';

import Session from './Session';

class SessionContainer extends Component {
  render() {
    const { navigation } = this.props;
    const { title } = navigation.state.params;
    const { id } = navigation.state.params;
    const { description } = navigation.state.params;
    const { time } = navigation.state.params;
    const { location } = navigation.state.params;
    const { speaker } = navigation.state.params;

    const favedItems = Array.from(this.props.faves).find(fave => fave.id === id);

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
          thisProps={this.props}
          favedItems={favedItems}
        />
      </View>
    );
  }
}
export default connect(state => ({
  faves: state.faveData.faves,
}))(withNavigation(SessionContainer));
