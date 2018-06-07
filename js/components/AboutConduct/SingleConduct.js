import React, { Component } from 'react';
import { Text, View, Animated, TouchableOpacity } from 'react-native';

import styles from './styles';

class SingleConduct extends Component {
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
      <View key={this.props.index}>
        <TouchableOpacity onPress={() => this.toggle()}>
          <Text style={styles.listTitle}>
            {this.state.toggle === true ? ' - ' : ' + '}
            {this.props.item.title}
          </Text>
        </TouchableOpacity>
        <Animated.View style={{ height: this.state.animation }}>
          {this.state.toggle && <Text style={styles.text}>{this.props.item.description}</Text>}
        </Animated.View>
      </View>
    );
  }
}

export default SingleConduct;
