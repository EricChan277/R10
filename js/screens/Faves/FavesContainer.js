import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import { View, Text } from 'react-native';

import Loader from '../../components/Loader';
import formatSessionData from '../../lib/helper';
import Faves from './Faves';
import styles from './styles';

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
      faved.find(fave => fave.id === session.id));
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
          if (error) {
              <Text>{error}</Text>;
          }
          const faved = this.filterSessions(favedItems, data.allSessions);

          return faved.length === 0 ? (
              <View style={styles.none}>
                  <Text>Your favourited sessions will show up here!</Text>
              </View>
          ) : (
              <Faves
                  sessionData={formatSessionData(faved)}
                  navigation={this.props.navigation}
              />
          );
        }}
        </Query>
    );
  }
}

FavesContainer.propTypes = {
  faves: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])).isRequired
};
export default connect(state => ({
  faves: state.faveData.faves
}))(withNavigation(FavesContainer));
