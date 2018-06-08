import { StyleSheet, Platform } from 'react-native';
import { assetColors, assetTypography } from '../../assets/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  image: {
    padding: 20,
    margin: 30,
    borderBottomColor: assetColors.lightGrey,
    borderBottomWidth: 2,

    justifyContent: 'center',
    alignItems: 'center',
  },
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

  listView: {
    flexDirection: 'column',
  },
  footer: {
    backgroundColor: 'white',
    paddingTop: 10,
    marginHorizontal: 15,
    borderTopColor: assetColors.lightGrey,
    borderTopWidth: 1,
    width: '100%',
  },
});

export default styles;
