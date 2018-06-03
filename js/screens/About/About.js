import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight
} from 'react-native';
import styles from './styles';

// const About = ({ aboutData, toggleState, toggleStateFunc, navigation }) => {
//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <View style={styles.image}>
//           <Image source={require('../../assets/images/r10_logo.png')} />
//         </View>
//         <Text style={styles.text}>
//           R10 is a conference that focuses on just about any topic related to
//           dev.
//         </Text>
//         <Text style={styles.title}>Date & Venue</Text>
//         <Text style={styles.text}>
//           The R10 conference will take place on Tuesday, June 27, 2017 in
//           Vancouver, BC.
//         </Text>
//         <Text style={styles.title}>Code of Conduct</Text>
//         <Text>
//           {aboutData.map((item, index) => (
//             <View style={styles.listView} key={index}>
//               <TouchableHighlight onPress={() => toggleStateFunc()}>
//                 <Text style={styles.listTitle}>
//                   {toggleState == false ? '+ ' : '- '}
//                   {item.title}
//                 </Text>
//               </TouchableHighlight>
//               {toggleState == false ? ' ' : <Text>{item.description}</Text>}
//             </View>
//           ))}
//         </Text>
//       </ScrollView>
//     </View>
//   );
// };

const About = ({ aboutData, toggleState, toggleStateFunc, navigation }) => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default About;
