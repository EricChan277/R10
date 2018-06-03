import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { sharedNavigationOptions } from './config';

import AboutContainer from '../screens/About';
import ScheduleContainer from '../screens/Schedule';
import FavesContainer from '../screens/Faves';
import SessionContainer from '../screens/Session';
import SpeakerContainer from '../screens/Speaker';

const aboutStack = createStackNavigator(
  {
    About: AboutContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export const speakerStack = createStackNavigator(
  {
    Speaker: SpeakerContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: 'black',
        borderBottomColor: 'black'
      }
    })
  }
);

const favesStack = createStackNavigator(
  {
    Faves: FavesContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

const scheduleStack = createStackNavigator(
  {
    Schedule: ScheduleContainer,
    Session: SessionContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    Schedule: scheduleStack,
    Faves: favesStack,
    About: aboutStack
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
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 10,
        fontFamily: 'Montserrat'
      },
      style: {
        backgroundColor: 'black'
      }
    }
  }
);
