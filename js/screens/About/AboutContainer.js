import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { ScrollView, View, Text } from 'react-native';

import SingleConduct from '../../components/SingleConduct';
import Loader from '../../components/Loader';
import About from './About';

import styles from './styles';

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

class AboutContainer extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <About />
        <Query query={conductData}>
          {({ loading, error, data }) => {
            if (loading) return <Loader />;
            if (error) return <Text>Error!</Text>;

            return (
              <View>
                {data.allConducts.map((item, index) => (
                  <SingleConduct item={item} key={index} index={index} />
                ))}
              </View>
            );
          }}
        </Query>
        <Text style={styles.footer}>© Eric Chan 2018</Text>
      </ScrollView>
    );
  }
}

export default AboutContainer;
