import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },

  title: {
    fontSize: 32,
    color: "#313140",
    fontWeight: 'bold',
    fontFamily: 'gilroy-heavy',
    paddingHorizontal: 15,
  },

  normalText: {
    color: '#B7B7C8',
    fontSize: 14,
    fontFamily: 'gilroy-medium'
  },

  categories: {
    marginVertical: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },

  category: {
    width: 56,
    height: 56,
    borderRadius: 56 / 2,

    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },

  categoryTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  categoryTitle: {
    fontSize: 18,
    paddingTop: 15,
    color: '#F2264B',
    fontFamily: 'gilroy-bold',
    paddingBottom: 10,
  },

  heroesContainer: {
    width: '100%',
    height: 240,
    marginBottom: 10,
  },
});

export default styles;
