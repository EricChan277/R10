import { StyleSheet, Platform } from 'react-native';
import { assetColors, assetTypography } from '../../assets/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%'
  },
  location: {
    flexDirection: 'row',
    color: assetColors.mediumGrey,
    padding: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 10,
    color: assetColors.mediumGrey
  },
  time: {
    color: assetColors.red,
    fontWeight: 'bold',
    padding: 10
  },
  text: {
    color: assetColors.mediumGrey,
    padding: 10
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  speaker: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: assetColors.lightGrey,
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: assetColors.blue,
    padding: 10,
    borderRadius: 100
  }
});

export default styles;
