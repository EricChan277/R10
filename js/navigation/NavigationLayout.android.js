import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
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
      ...sharedNavigationOptions(navigation),
      title: 'About'
    })
  }
);

const favesStack = createStackNavigator(
  {
    Faves: FavesContainer
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation),
      title: 'Faves'
    })
  }
);

const scheduleStack = createStackNavigator(
  {
    Schedule: ScheduleContainer,
    title: 'Schedule',
    Session: SessionContainer,
    title: 'Session',
    Speaker: SpeakerContainer,
    title: 'Speaker'
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

aboutStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <Ionicons name={'md-information-circle'} size={25} color={tintColor} />
  )
};

favesStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <Ionicons name={'md-heart'} size={25} color={tintColor} />
  )
};
scheduleStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <Ionicons name={'md-calendar'} size={25} color={tintColor} />
  )
};

export default createDrawerNavigator(
  {
    Schedule: scheduleStack,
    Faves: favesStack,
    About: aboutStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      drawerIcon: ({ focused, tintColor }) => {
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