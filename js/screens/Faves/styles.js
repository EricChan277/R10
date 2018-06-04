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
    paddingTop: 10
  },
  time: {
    backgroundColor: assetColors.lightGrey,
    fontWeight: 'bold',
    padding: 10
  },
  listTitle: {
    fontSize: 20,
    padding: 10,
    paddingBottom: 0
  },
  listLocation: {
    color: assetColors.mediumGrey,
    fontSize: 16
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
