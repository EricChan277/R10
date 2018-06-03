import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import moment from 'moment';

import styles from './styles';

const Session = ({
  title,
  id,
  description,
  time,
  location,
  speaker,
  navigation
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.time}>{moment(time).format('h:mm a')}</Text>
      <Text style={styles.text}>{description}</Text>
      <Text style={styles.text}>Presented by: </Text>

      <View style={styles.speaker}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Speaker', {
              speaker: speaker
            })
          }
        >
          <Image
            source={{
              uri: speaker.image
            }}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={{ padding: 10 }}>{speaker.name}</Text>
      </View>
      <View style={{ alignItems: 'center', marginTop: 15 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Added to faves!')}
        >
          <Text style={{ color: 'white' }}>Add to Faves</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log('Removed from Faves!')}
        >
          <Text style={{ color: 'white' }}>Removed from Faves</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Session;
