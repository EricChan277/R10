import { StyleSheet, Platform } from 'react-native';
import { assetTypography, assetColors } from '../../assets/styles';

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 15,
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
  text: {
    padding: 15,
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
  listTitle: {
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
  listView: {
    flexDirection: 'column',
  },
  titleWrapper: {
    flexDirection: 'row',
    width: '90%',
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
