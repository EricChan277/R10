import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  SectionList,
  TouchableOpacity
} from 'react-native';
import styles from './styles';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Schedule = ({ sessionData, navigation }) => {
  return (
    <View>
      <SectionList
        renderItem={({ item, location, startTime }, index) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Session', {
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
              {/* <TouchableHighlight onPress={() => console.log('hello')}>
                <Ionicons name="ios-heart-outline" size={25} color="red" />
              </TouchableHighlight> */}
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.time}>{moment(title).format('h:mm:ss a')}</Text>
        )}
        sections={sessionData}
        keyExtractor={(item, index) => index + ''}
      />
    </View>
  );
};

export default Schedule;
