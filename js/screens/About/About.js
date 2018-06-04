import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const About = ({ aboutData, toggleState, toggleStateFunc, navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.image}>
        <Image source={require('../../assets/images/r10_logo.png')} />
      </View>
      <Text style={styles.text}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>
      <Text style={styles.title}>Date & Venue</Text>
      <Text style={styles.text}>
        The R10 conference will take place on Tuesday, June 27, 2017 in
        Vancouver, BC.
      </Text>
      <Text style={styles.title}>Code of Conduct</Text>

      <View style={styles.listView}>
        {aboutData.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              onPress={() => console.log('pressed on', item.title)}
            >
              <Text style={styles.listTitle}> {item.title}</Text>
            </TouchableOpacity>
            <Text>{item.description}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default About;
