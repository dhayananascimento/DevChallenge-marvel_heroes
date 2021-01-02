import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: 'black'
  },

  imageBackground: {
    height: 500,
    width: '100%',
    justifyContent: 'flex-end',
  },

  alterEgo: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.75,
    fontFamily: 'gelroy-medium',

    marginHorizontal: 15,
  },

  name: {
    color: '#fff',
    fontSize: 40,
    fontFamily: 'gelroy-heavy',

    marginHorizontal: 15,
  },

  characteristics: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    marginTop: 25,
    paddingVertical: 10,
    marginHorizontal: 15,
  },

  characteristicsItem: {
    color: '#fff',
    marginVertical: 12,
    fontFamily: 'gelroy-medium',
  },

  biography: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'justify',
    fontFamily: 'gelroy-medium',

    paddingHorizontal: 15,
  },

  title: {
    color: '#fff',
    marginVertical: 15,
    fontSize: 18,
    fontFamily: 'gelroy-bold',

    paddingHorizontal: 15,
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
    opacity: 0.25,
    backgroundColor: 'white',
  },

  movie: {
    width: 140,
    height: 230,
    borderRadius: 15,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
});

export default styles;
