import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { Text, View } from 'react-native';

import Loader from '../../components/Loader';

import About from './About';

const AboutData = gql`
  query {
    allConducts {
      title
      description
      id
      order
    }
  }
`;
// console.log(AboutData);

class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.toggleStateFunc = this.toggleStateFunc.bind(this);
  }
  toggleStateFunc = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <Query query={AboutData}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error!</Text>;

          return (
            <View>
              <About
                aboutData={data.allConducts}
                toggleState={this.state.toggle}
                toggleStateFunc={this.toggleStateFunc}
                navigation={this.props.navigation}
              />
            </View>
          );
        }}
      </Query>
    );
  }
}

export default AboutContainer;
