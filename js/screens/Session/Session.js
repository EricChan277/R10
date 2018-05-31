import React from 'react';
import { View, Text } from 'react-native';

const Session = ({ title, id, description, time, location, speaker }) => {
  console.log(id);
  return (
    <View>
      <Text>{location}</Text>
      <Text>{time}</Text>
      <Text>{title}</Text>
      <Text>{id}</Text>
      <Text>{description}</Text>

      <Text>{speaker.name}</Text>
    </View>
  );
};

export default Session;
