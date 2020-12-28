import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#F8F8F8',
  },

  options: {
    flexDirection: 'row',
  },

  subtileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  heroesContainer: {
    width: '100%',
    height: 300,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#F2264B',
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 10,
  },

  normalText: {
    color: '#B7B7C8',
    fontSize: 16,
  },
});

export default styles;
