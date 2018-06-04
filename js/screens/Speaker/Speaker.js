import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Speaker = ({ speaker, navigation }) => (
  <View style={styles.background}>
    {console.log(speaker)}
    <Icon
      name="md-close"
      size={30}
      color="white"
      style={styles.backBtn}
      onPress={() => navigation.pop()}
    />
    <Text style={styles.title}> About the Speaker </Text>
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <Image
          source={{
            uri: speaker.image,
          }}
          style={styles.image}
        />
        <Text style={styles.name}>{speaker.name}</Text>
        <Text style={styles.text}>{speaker.bio}</Text>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(speaker.url)}>
          <Text style={{ color: 'white' }}>Read More on Wikipedia</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  </View>
);

export default Speaker;
