import React from 'react';
import { View, Text, Image } from 'react-native';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';

import SingleConduct from '../../components/SingleConduct';
import Loader from '../../components/Loader';

import styles from './styles';

const About = ({ conductData }) => (
    <View>
        <View style={styles.image}>
            <Image source={require('../../assets/images/r10_logo.png')} />
        </View>
        <Text style={styles.text}>
      R10 is a conference that focuses on just about any topic related to dev.
        </Text>
        <Text style={styles.title}>Date & Venue</Text>
        <Text style={styles.text}>
      The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver,
      BC.
        </Text>
        <Text style={styles.title}>Code of Conduct</Text>

        <Query query={conductData}>
            {({ loading, error, data }) => {
        if (loading) return <Loader />;
        if (error) return <Text>Error!</Text>;

        return (
            <View>
                {data.allConducts.map((item, index) => (
                    <SingleConduct item={item} key={index} index={index} />
            ))}
            </View>
        );
      }}
        </Query>
        <Text style={styles.footer}>© Eric Chan 2018</Text>
    </View>
);

About.propTypes = {
  conductData: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.array])).isRequired
};

export default About;
