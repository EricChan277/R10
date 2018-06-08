import React from 'react';
import { connect } from 'react-redux';
import { View, Text, SectionList, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';

import moment from 'moment';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Schedule = ({ sessionData, navigation, faved }) => (
    <View style={styles.page}>
        <SectionList
            renderItem={({ item }, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.item}
                    onPress={() =>
            navigation.push('Session', {
              title: item.title,
              id: item.id,
              description: item.description,
              time: item.startTime,
              location: item.location,
              speaker: item.speaker
            })
          }
                >
                    <Text style={styles.listTitle}>{item.title}</Text>
                    <View style={styles.listView}>
                        <Text style={styles.listLocation}>{item.location}</Text>
                        {faved.find(fave => fave.id === item.id) && (
                        <Ionicons name="md-heart" size={25} color="red" />
            )}
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

Schedule.propTypes = {
  sessionData: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])).isRequired,
  faved: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object])).isRequired,
  navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])).isRequired
};

export default connect(state => ({
  faves: state.faveData.faves
}))(Schedule);
