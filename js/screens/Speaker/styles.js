import { StyleSheet, Platform } from 'react-native';
import { assetColors, assetTypography } from '../../assets/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '90%',
    height: '90%',
    alignItems: 'center',
    paddingTop: 20,
    borderRadius: 10
  },
  innerContainer: {
    padding: 10,
    alignItems: 'center'
  },
  title: {
    position: 'absolute',
    color: 'white',
    top: 5
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 15
  },
  text: {
    padding: 10,
    lineHeight: 25
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
  },
  background: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: '100%',
    paddingTop: 50
  },
  backBtn: {
    position: 'absolute',
    top: 0,
    left: 20
  }
});

export default styles;
