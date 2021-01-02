import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },

  title: {
    fontSize: 32,
    color: '#313140',
    fontWeight: 'bold',
    fontFamily: 'gilroy-heavy',

    marginHorizontal: 15,
  },

  welcome: {
    fontSize: 14,
    color: '#B7B7C8',
    fontFamily: 'gilroy-semibold',

    marginHorizontal: 15,
  },

  categories: {
    marginVertical: 20,
    marginHorizontal: 15,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
