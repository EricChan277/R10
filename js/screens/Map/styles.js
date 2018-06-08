import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  mapContainer: {
    flex: 1
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});

export default styles;
