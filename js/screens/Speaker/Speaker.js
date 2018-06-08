import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import PropTypes from 'prop-types';

import styles from './styles';

const Speaker = ({ speaker, navigation }) => (
    <View style={styles.background}>
        <Icon
            name="md-close"
            size={30}
            color="white"
            style={styles.backBtn}
            onPress={() => navigation.pop()}
        />
        <Text style={styles.title}> About the Speaker </Text>
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.innerContainer}>
                <Image
                    source={{
            uri: speaker.image
          }}
                    style={styles.image}
                />
                <Text style={styles.name}>{speaker.name}</Text>
                <Text style={styles.text}>{speaker.bio}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Linking.openURL(speaker.url)}
                >
                    <Text style={styles.btnText}>Read More on Wikipedia</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    </View>
);

Speaker.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.func])).isRequired,
  speaker: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string]))
    .isRequired
};

export default Speaker;
