import React, { Component } from 'react';
import Session from './Session';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import { View } from 'react-native';

class SessionContainer extends Component {
  render() {
    const { navigation } = this.props;
    const title = navigation.state.params.title;
    const id = navigation.state.params.id;
    const description = navigation.state.params.description;
    const time = navigation.state.params.time;
    const location = navigation.state.params.location;
    const speaker = navigation.state.params.speaker;

    const favedItems = Array.from(this.props.faves).find(
      fave => fave.id === id
    );

    console.log(favedItems);

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
  faves: state.faveData.faves
}))(withNavigation(SessionContainer));
