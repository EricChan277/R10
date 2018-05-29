import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import AboutContainer from '../screens/About';
import ScheduleContainer from '../screens/Schedule';

const aboutStack = createStackNavigator({
  About: AboutContainer
});

const scheduleStack = createStackNavigator({
  Schedule: ScheduleContainer
});

export default createBottomTabNavigator(
  {
    Schedule: scheduleStack,
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
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 10
      },
      style: {
        backgroundColor: 'black'
      }
    }
  }
);
