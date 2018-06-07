import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const About = () => (
  <View>
    <View style={styles.image}>
      <Image source={require('../../assets/images/r10_logo.png')} />
    </View>
    <Text style={styles.text}>
      R10 is a conference that focuses on just about any topic related to dev.
    </Text>
    <Text style={styles.title}>Date & Venue</Text>
    <Text style={styles.text}>
      The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver, BC.
    </Text>
    <Text style={styles.title}>Code of Conduct</Text>
  </View>
);

export default About;
