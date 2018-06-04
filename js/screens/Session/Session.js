import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import { createTheFaves, deleteTheFaves } from '../../redux/modules/faves';
import styles from './styles';

const Session = ({
  title,
  id,
  description,
  time,
  location,
  speaker,
  navigation,
  thisProps,
  favedItems,
}) => (
  <View style={styles.container}>
    <View style={styles.location}>
      <Text style={styles.locationText}>{location}</Text>
      {favedItems ? <Ionicons name="md-heart" size={25} color="red" /> : <Text />}
    </View>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.time}>{moment(time).format('h:mm a')}</Text>
    <Text style={styles.text}>{description}</Text>
    <Text style={styles.text}>Presented by: </Text>

    <View style={styles.speaker}>
      <TouchableOpacity
        onPress={() =>
          navigation.push('Speaker', {
            speaker,
          })
        }
      >
        <Image
          source={{
            uri: speaker.image,
          }}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={{ padding: 10 }}>{speaker.name}</Text>
    </View>

    <View style={{ alignItems: 'center', marginTop: 15 }}>
      {!favedItems ? (
        <TouchableOpacity
          style={styles.button}
          onPress={() => thisProps.dispatch(createTheFaves(id))}
        >
          <Text style={{ color: 'white' }}>Add to Faves</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.button}
          onPress={() => thisProps.dispatch(deleteTheFaves(id))}
        >
          <Text style={{ color: 'white' }}>Remove from Faves</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

Session.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.object.isRequired,
  favedItems: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  thisProps: PropTypes.object.isRequired,
};

export default connect(state => ({
  faves: state.faveData.faves,
}))(withNavigation(Session));
