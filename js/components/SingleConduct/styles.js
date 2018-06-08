import { StyleSheet, Platform } from 'react-native';
import { assetTypography, assetColors } from '../../assets/styles';

const styles = StyleSheet.create({
  text: {
    // padding: 15,
    ...Platform.select({
      android: {
        fontFamily: assetTypography.android,
      },
      ios: {
        fontFamily: assetTypography.ios,
      },
    }),
  },
  listTitle: {
    fontSize: 18,
    paddingHorizontal: 5,
    padding: 15,
    color: assetColors.purple,
    backgroundColor: 'red',
    ...Platform.select({
      android: {
        fontFamily: assetTypography.android,
      },
      ios: {
        fontFamily: assetTypography.ios,
      },
    }),
  },

  expander: {
    fontSize: 18,
    color: assetColors.purple,
    paddingTop: 10,
    ...Platform.select({
      android: {
        fontFamily: assetTypography.android,
      },
      ios: {
        fontFamily: assetTypography.ios,
      },
    }),
  },
});

export default styles;
