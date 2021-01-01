import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  abilities: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  imageBackground: {
    width: '100%',
    height: 500,
    justifyContent: 'flex-end',
  },

  alterEgo: {
    color: 'white',
    fontSize: 16,
    paddingHorizontal: 15,
  },

  name: {
    color: 'white',
    fontSize: 34,
    paddingHorizontal: 15,
  },

  caracteristics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 25,
  },

  caracteristicsItem: {
    marginVertical: 10,
    color: 'white',
  },

  biography: {
    color: 'white',
    paddingHorizontal: 15,
    textAlign: 'justify',
  },

  title: {
    color: 'white',
    marginVertical: 15,
    fontSize: 18,
    paddingHorizontal: 15,
  },

  abilitiesTitle: {
    color: 'white',
    width: 100,
    opacity: 0.75,
  },

  barsContainer: {
    width: Dimensions.get('window').width - 130,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  barLess: {
    width: '1%',
    height: '70%',
    backgroundColor: 'white',
  },

  barEqual: {
    width: '1%',
    height: '100%',
    backgroundColor: 'white',
  },

  barMore: {
    width: '1%',
    height: '70%',
    backgroundColor: 'white',
    opacity: 0.25,
  },

  movie: {
    marginHorizontal: 10,
    width: 140,
    height: 240,
    borderRadius: 15,
    overflow: 'hidden',
  },
});

export default styles;
