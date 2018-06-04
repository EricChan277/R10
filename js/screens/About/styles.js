import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  image: {
    padding: 20,
    margin: 30,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 2,

    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 15,
    paddingTop: 10
  },
  text: {
    padding: 15,
    paddingTop: 10
  },
  listTitle: {
    color: '#9963ea',
    padding: 15,
    paddingTop: 10,
    fontSize: 18
  },
  listView: {
    flexDirection: 'column'
  }
});

export default styles;
