import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 15,
  },

  title: {
    fontSize: 18,
    color: '#F2264B',
    fontFamily: 'gilroy-bold',

    marginTop: 15,
    marginBottom: 10,
  },

  normalText: {
    fontSize: 14,
    color: '#B7B7C8',
    fontFamily: 'gilroy-medium',
  },

  heroesContainer: {
    height: 240,
    width: '100%',
    marginBottom: 10,
  },
});

export default styles;
