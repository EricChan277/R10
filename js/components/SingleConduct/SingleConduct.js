import React, { Component } from 'react';
import { Text, View, Animated } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class SingleConduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      animation: new Animated.Value(),
      fullHeight: '',
      startHeight: 15,
    };
  }
  getFullHeight(event) {
    if (this.state.fullHeight === '') {
      this.setState({
        fullHeight: event.nativeEvent.layout.height,
      });
    }
  }

  toggle() {
    const startValue = this.state.toggled
      ? this.state.fullHeight + this.state.startHeight
      : this.state.startHeight;

    const endValue = this.state.toggled
      ? this.state.startHeight
      : this.state.fullHeight + this.state.startHeight;

    this.setState({
      toggled: !this.state.toggled,
    });

    this.state.animation.setValue(startValue);

    Animated.spring(this.state.animation, {
      toValue: endValue,
    }).start();
  }
  render() {
    return (
      <View>
        <Text style={styles.listTitle} onPress={this.toggle.bind(this)}>
          {this.state.toggled ? '-' : '+'} {this.props.item.title}
        </Text>

        <Animated.View style={{ height: this.state.animation }} key={this.props.index}>
          <Text style={styles.text} onLayout={this.getFullHeight.bind(this)}>
            {this.props.item.description}
          </Text>
        </Animated.View>
      </View>
    );
  }
}

export default SingleConduct;
