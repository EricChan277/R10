import { StyleSheet, Platform } from 'react-native';
import { assetColors, assetTypography } from '../../assets/styles';

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    height: '100%'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  item: {
    borderBottomColor: assetColors.lightGrey,
    borderBottomWidth: 1
  },
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
  time: {
    backgroundColor: assetColors.lightGrey,
    fontWeight: 'bold',
    padding: 10,
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
    fontSize: 20,
    padding: 10,
    paddingBottom: 0,
    ...Platform.select({
      android: {
        fontFamily: assetTypography.android
      },
      ios: {
        fontFamily: assetTypography.ios
      }
    })
  },
  listLocation: {
    color: assetColors.mediumGrey,
    fontSize: 16,
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
    padding: 10,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default styles;
