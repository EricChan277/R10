import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import SingleConduct from './SingleConduct';

import Loader from '../Loader';

const conductData = gql`
  query {
    allConducts {
      title
      description
      id
      order
    }
  }
`;
class AboutConductContainer extends Component {
  render() {
    return (
      <Query query={conductData}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error!</Text>;

          return (
            <View>
              {data.allConducts.map((item, index) => <SingleConduct item={item} index={index} />)}
            </View>
          );
        }}
      </Query>
    );
  }
}

export default AboutConductContainer;
