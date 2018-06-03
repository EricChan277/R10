import { createStackNavigator } from 'react-navigation';
import NavigationLayout, { speakerStack } from './NavigationLayout';

export default createStackNavigator(
  {
    Layout: NavigationLayout,
    Speaker: speakerStack
  },

  {
    mode: 'modal',
    headerMode: 'none'
  }
);
