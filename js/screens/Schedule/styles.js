import { StyleSheet } from 'react-native';
import assetColors from '../../assets/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    fontFamily: 'Montserrat'
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
    borderBottomColor: assetColors.mediumGrey,
    borderBottomWidth: 1,
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
