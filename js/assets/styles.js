import { Platform } from 'react-native';

export const assetColors = {
  mediumGrey: '#999999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a'
};

export const assetTypography = {
  ...Platform.select({
    android: {
      fontFamily: 'Montserrat-Regular'
    },
    ios: {
      fontFamily: 'Montserrat'
    }
  })
};
