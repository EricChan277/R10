import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const Speaker = ({ speaker }) => {
  console.log(speaker.image);
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: speaker.image
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{speaker.name}</Text>
      <Text style={styles.text}>{speaker.bio}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Open wiki page!')}
      >
        <Text style={{ color: 'white' }}>Read More on Wikipedia</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Speaker;
