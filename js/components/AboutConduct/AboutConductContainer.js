import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import styles from './styles';
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
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      animation: new Animated.Value(0),
    };
  }

  toggle() {
    const heightVal = this.state.toggle === true ? 0 : '100%';
    this.setState({
      toggle: !this.state.toggle,
    });

    Animated.spring(this.state.animation, {
      toValue: heightVal,
      duration: 1000,
    }).start();
  }

  render() {
    return (
      <Query query={conductData}>
        {({ loading, error, data }) => {
          if (loading) return <Loader />;
          if (error) return <Text>Error!</Text>;

          return (
            <View>
              {data.allConducts.map((item, index) => (
                <View key={index}>
                  <TouchableOpacity onPress={this.toggle.bind(this)}>
                    <Text style={styles.listTitle}>
                      {this.state.toggle === true ? ' - ' : ' + '}
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                  <Animated.View style={{ height: this.state.animation }}>
                    {this.state.toggle && <Text>{item.description}</Text>}
                  </Animated.View>
                </View>
              ))}
            </View>
          );
        }}
      </Query>
    );
  }
}

export default AboutConductContainer;
