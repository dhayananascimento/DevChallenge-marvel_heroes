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
    fontSize: 16,
    color: '#fff',
    opacity: 0.75,
    paddingHorizontal: 15,
    fontFamily: 'gelroy-medium',
  },

  name: {
    color: '#fff',
    fontSize: 40,
    paddingHorizontal: 15,
    fontFamily: 'gelroy-heavy',
  },

  caracteristics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 25,
  },

  caracteristicsItem: {
    color: '#fff',
    marginVertical: 12,
    fontFamily: 'gelroy-medium',
  },

  biography: {
    color: '#fff',
    paddingHorizontal: 15,
    textAlign: 'justify',
    fontSize: 14,
    fontFamily: 'gelroy-medium'
  },

  title: {
    color: '#fff',
    marginVertical: 15,
    fontSize: 18,
    fontFamily: 'gelroy-bold',
    paddingHorizontal: 15,
  },

  abilitiesTitle: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'gelroy-regular' ,
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
    width: 1,
    height: '70%',
    backgroundColor: 'white',
  },

  barEqual: {
    width: 1,
    height: '100%',
    backgroundColor: 'white',
  },

  barMore: {
    width: 1,
    height: '70%',
    backgroundColor: 'white',
    opacity: 0.25,
  },

  movie: {
    marginHorizontal: 10,
    width: 140,
    height: 230,
    borderRadius: 15,
    overflow: 'hidden',
  },
});

export default styles;
