import { StyleSheet, Platform } from 'react-native';
import { assetTypography } from '../../assets/styles';
const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 15,
    paddingTop: 10,
    ...Platform.select({
      android: {
        fontFamily: assetTypography.android
      },
      ios: {
        fontFamily: assetTypography.ios
      }
    })
  },
  text: {
    padding: 15,
    paddingTop: 10,
    ...Platform.select({
      android: {
        fontFamily: assetTypography.android
      },
      ios: {
        fontFamily: assetTypography.ios
      }
    })
  },
  listTitle: {
    color: '#9963ea',
    padding: 15,
    paddingTop: 10,
    fontSize: 18,
    ...Platform.select({
      android: {
        fontFamily: assetTypography.android
      },
      ios: {
        fontFamily: assetTypography.ios
      }
    })
  },
  listView: {
    flexDirection: 'column'
  }
});

export default styles;
