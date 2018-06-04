import React from 'react';
import { connect } from 'react-redux';
import {
  ScrollView,
  View,
  Text,
  SectionList,
  TouchableOpacity
} from 'react-native';

import styles from './styles';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Schedule = ({ sessionData, navigation, faved }) => {
  const favedSessions = sessionData.filter(session =>
    faved.find(fave => fave.id === session.id)
  );
  console.log(favedSessions);
  return (
    <View style={styles.page}>
      <SectionList
        renderItem={({ item, location, startTime }, index) => (
          <TouchableOpacity
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
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.time}>{moment(title).format('h:mm a')}</Text>
        )}
        sections={sessionData}
        keyExtractor={(item, index) => index + ''}
      />
    </View>
  );
};

export default connect(state => ({
  faves: state.faveData.faves
}))(Schedule);
