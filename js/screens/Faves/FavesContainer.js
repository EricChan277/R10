import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { formatSessionData } from '../../lib/helper';
import Faves from './Faves';

const SessionData = gql`
  query {
    allSessions {
      id
      location
      title
      speaker {
        name
        bio
        id
        image
      }
      startTime
      description
    }
  }
`;

class FavesContainer extends Component {
  render() {
    return (
      <Query query={SessionData}>
        {({ loading, error, data }) => {
          if (loading || !data) {
            return <ActivityIndicator />;
          }
          return (
            data.allSessions.length && (
              <Faves
                sessionData={formatSessionData(data.allSessions)}
                navigation={this.props.navigation}
              />
            )
          );
        }}
      </Query>
    );
  }
}
export default connect(state => ({
  faves: state.faveData.faves
}))(FavesContainer);
