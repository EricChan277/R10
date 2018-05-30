import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  SectionList
} from 'react-native';
import styles from './styles';
import moment from 'moment';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Schedule = ({ sessionData }) => {
  return (
    <View>
      <SectionList
        renderItem={({ item, location, startTime }, index) => (
          <View style={styles.container}>
            <Text style={styles.listTitle}>{item.title}</Text>
            <View style={styles.listView}>
              <Text style={styles.listLocation}>{item.location}</Text>
              <TouchableHighlight onPress={() => console.log('hello')}>
                <Ionicons name="ios-heart-outline" size={25} color="red" />
              </TouchableHighlight>
            </View>
          </View>
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

// const Schedule = ({ sessionData }) => {
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <Text>
//           {sessionData.map((item, index) => {
//             return (
//               <View>
// <Text style={styles.time}>
//   {moment(item.startTime).format('h:mm:ss a')}
//                 </Text>
//                 <View key={index}>
//   <Text style={styles.listTitle}>{item.title}</Text>
//   <View style={styles.listView}>
//     <Text style={styles.listLocation}>{item.location}</Text>
//     <TouchableHighlight onPress={() => console.log('hello')}>
//       <Ionicons
//         name="ios-heart-outline"
//         size={25}
//         color="red"
//       />
//     </TouchableHighlight>
//   </View>
//                 </View>
//               </View>
//             );
//           })}
//         </Text>
//       </ScrollView>
//     </View>
//   );
// };

export default Schedule;
