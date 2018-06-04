import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import AboutConduct from '../../components/AboutConduct';

const About = () => {
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
        <AboutConduct />
      </View>
      <Text style={styles.footer}>© Eric Chan 2018</Text>
    </ScrollView>
  );
};

export default About;
