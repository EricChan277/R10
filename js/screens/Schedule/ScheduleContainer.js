import React, { Component } from 'react';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loader from '../../components/Loader';

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
  filterSessions = (faved, sessions) => {
    const favedSessions = sessions.filter(session =>
      faved.find(fave => fave.id === session.id)
    );
    return favedSessions;
  };
  render() {
    const favedItems = Array.from(this.props.faves);

    return (
      <Query query={SessionData}>
        {({ loading, error, data }) => {
          if (loading || !data) {
            return <Loader />;
          }
          const faved = this.filterSessions(favedItems, data.allSessions);
          console.log(faved);
          return (
            data.allSessions.length && (
              <Schedule
                sessionData={formatSessionData(data.allSessions)}
                navigation={this.props.navigation}
                faved={faved}
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
