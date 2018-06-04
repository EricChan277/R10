import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

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

export const speakerStack = createStackNavigator(
  {
    Speaker: SpeakerContainer,
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: 'black',
      },
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

export default createBottomTabNavigator(
  {
    Schedule: scheduleStack,
    Map: mapStack,
    Faves: favesStack,
    About: aboutStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Schedule') {
          iconName = `ios-calendar${focused ? '' : '-outline'}`;
        } else if (routeName === 'About') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Faves') {
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Map') {
          iconName = `ios-map${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 10,
        fontFamily: 'Montserrat',
      },
      style: {
        backgroundColor: 'black',
      },
    },
  },
);
