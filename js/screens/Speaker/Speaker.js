import React from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Speaker = ({ speaker, navigation }) => {
  return (
    <View style={styles.background}>
      <Icon
        name={'md-close'}
        size={30}
        color={'white'}
        style={styles.backBtn}
        onPress={() => navigation.pop()}
      />
      <Text style={styles.title}> About the Speaker </Text>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.innerContainer}>
          <Image
            source={{
              uri: speaker.image
            }}
            style={styles.image}
          />
          <Text style={styles.name}>{speaker.name}</Text>
          <Text style={styles.text}>{speaker.bio}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('Open wiki page!')}
          >
            <Text style={{ color: 'white' }}>Read More on Wikipedia</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Speaker;
