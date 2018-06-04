import React from 'react';
import { connect } from 'react-redux';
import { View, Text, SectionList, TouchableOpacity } from 'react-native';
import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

import PropTypes from 'prop-types';

import styles from './styles';

const Faves = ({ sessionData, navigation }) => (
  <View style={styles.page}>
    <SectionList
      renderItem={({ item }, index) => (
        <TouchableOpacity
          key={index}
          style={styles.item}
          onPress={() =>
            navigation.navigate('Session', {
              title: item.title,
              id: item.id,
              description: item.description,
              time: item.startTime,
              location: item.location,
              speaker: item.speaker,
            })
          }
        >
          <Text style={styles.listTitle}>{item.title}</Text>
          <View style={styles.listView}>
            <Text style={styles.listLocation}>{item.location}</Text>
            <Ionicons name="md-heart" size={25} color="red" />
          </View>
        </TouchableOpacity>
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.time}>{moment(title).format('h:mm a')}</Text>
      )}
      sections={sessionData}
      keyExtractor={(item, index) => `${index}`}
    />
  </View>
);

// Faves.propTypes = {
//   sessionData: PropTypes.array.isRequired,
//   navigation: PropTypes.object.isRequired,
// };

export default connect(state => ({
  faves: state.faveData.faves,
}))(Faves);
