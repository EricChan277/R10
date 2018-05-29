import { createStackNavigator } from 'react-navigation';
import AboutContainer from '../screens/About';
import ScheduleContainer from '../screens/Schedule';

export default createStackNavigator({
  About: AboutContainer,
  Schedule: ScheduleContainer
});
