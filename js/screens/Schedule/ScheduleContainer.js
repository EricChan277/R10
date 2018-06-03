import React, { Component } from 'react';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { ActivityIndicator } from 'react-native';

import { formatSessionData } from '../../lib/helper';
import Schedule from './Schedule';

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

class ScheduleContainer extends Component {
  render() {
    return (
      <Query query={SessionData}>
        {({ loading, error, data }) => {
          if (loading || !data) {
            return <ActivityIndicator />;
          }
          return (
            data.allSessions.length && (
              <Schedule
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
}))(ScheduleContainer);
