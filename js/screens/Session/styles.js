import { StyleSheet, Platform } from 'react-native';
import { assetColors, assetTypography } from '../../assets/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
  },
  location: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    ...Platform.select({
      android: {
        fontFamily: assetTypography.android,
      },
      ios: {
        fontFamily: assetTypography.ios,
      },
    }),
  },
  locationText: {
    color: assetColors.mediumGrey,
    ...Platform.select({
      android: {
        fontFamily: assetTypography.android,
      },
      ios: {
        fontFamily: assetTypography.ios,
      },
    }),
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 10,
    color: assetColors.mediumGrey,
    ...Platform.select({
      android: {
        fontFamily: assetTypography.android,
      },
      ios: {
        fontFamily: assetTypography.ios,
      },
    }),
  },
  time: {
    color: assetColors.red,
    fontWeight: 'bold',
    padding: 10,
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
    color: assetColors.mediumGrey,
    padding: 10,
    ...Platform.select({
      android: {
        fontFamily: assetTypography.android,
      },
      ios: {
        fontFamily: assetTypography.ios,
      },
    }),
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  speaker: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: assetColors.lightGrey,
    marginLeft: 20,
    marginRight: 20,
    ...Platform.select({
      android: {
        fontFamily: assetTypography.android,
      },
      ios: {
        fontFamily: assetTypography.ios,
      },
    }),
  },
  button: {
    alignItems: 'center',
    backgroundColor: assetColors.blue,
    padding: 10,
    borderRadius: 100,
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
