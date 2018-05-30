import React, { Component } from 'react';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { ActivityIndicator } from 'react-native';

import { formatSessionData } from '../../lib/helper';
import Schedule from './Schedule';

const SessionData = gql`
  query {
    allSessions {
      location
      title
      speaker {
        name
      }
      startTime
      description
    }
  }
`;

export default class ScheduleContainer extends Component {
  render() {
    return (
      <Query query={SessionData}>
        {({ loading, error, data }) => {
          if (loading || !data) {
            return <ActivityIndicator />;
          }
          return (
            data.allSessions.length && (
              <Schedule sessionData={formatSessionData(data.allSessions)} />
            )
          );
        }}
      </Query>
    );
  }
}
