import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import gql from 'graphql-tag';

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
        <About conductData={conductData} />
      </ScrollView>
    );
  }
}

export default AboutContainer;
