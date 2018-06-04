import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import Loader from '../../components/Loader';
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

          return (
            data.allSessions.length && (
              <Faves
                sessionData={formatSessionData(faved)}
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
}))(withNavigation(FavesContainer));
