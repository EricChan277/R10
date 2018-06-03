import { StyleSheet, Platform } from 'react-native';
import { assetColors, assetTypography } from '../../assets/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    alignItems: 'center',
    paddingTop: 20
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 10,
    marginBottom: 10
  },
  time: {
    color: assetColors.red,
    fontWeight: 'bold',
    padding: 10
  },
  text: {
    padding: 10
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50
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
