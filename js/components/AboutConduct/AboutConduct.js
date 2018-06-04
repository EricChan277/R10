import React from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';

import styles from './styles';
const AboutConduct = ({ item, index, toggleFunc, toggleState, animState }) => {
  return (
    <View>
      <TouchableOpacity key={index} onPress={() => toggleFunc()}>
        <Text style={styles.listTitle}>
          {index}
          {toggleState === true ? ' - ' : ' + '}
          {item.title}
        </Text>
      </TouchableOpacity>
      <Animated.View style={{ height: animState }}>
        {toggleState === true && <Text>{item.description}</Text>}
      </Animated.View>
    </View>
  );
};

export default AboutConduct;
