import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

import { sharedNavigationOptions } from './config';

import AboutContainer from '../screens/About';
import ScheduleContainer from '../screens/Schedule';
import FavesContainer from '../screens/Faves';
import SessionContainer from '../screens/Session';
import SpeakerContainer from '../screens/Speaker';
import MapContainer from '../screens/Map';

const aboutStack = createStackNavigator(
  {
    About: AboutContainer,
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'About',
      headerTitleStyle: { color: 'white' },
    }),
  },
);

const mapStack = createStackNavigator(
  {
    Map: MapContainer,
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Map',
      headerTitleStyle: { color: 'white' },
    }),
  },
);

export const speakerStack = createStackNavigator(
  {
    Speaker: SpeakerContainer,
  },
  {
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: 'black',
      },
    }),
  },
);

const favesStack = createStackNavigator(
  {
    Faves: FavesContainer,
    Session: SessionContainer,
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Faves',
      headerTitleStyle: { color: 'white' },
    }),
  },
);

const scheduleStack = createStackNavigator(
  {
    Schedule: ScheduleContainer,
    Session: SessionContainer,
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Schedule',
      headerTitleStyle: { color: 'white' },
    }),
  },
);

aboutStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <Ionicons name="md-information-circle" size={25} color={tintColor} />
  ),
};

favesStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => <Ionicons name="md-heart" size={25} color={tintColor} />,
};
scheduleStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => <Ionicons name="md-calendar" size={25} color={tintColor} />,
};

mapStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => <Ionicons name="md-map" size={25} color={tintColor} />,
};

// mapStack.navigationOptions = {
//   tintColor: PropTypes.string.isRequired,
// };
export default createDrawerNavigator({
  Schedule: scheduleStack,
  Map: mapStack,
  Faves: favesStack,
  About: aboutStack,
});
