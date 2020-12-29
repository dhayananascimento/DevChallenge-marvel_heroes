import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },

  categories: {
    marginVertical: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: "space-between"
  },

  category: {
    width: 50,
    height: 50,
    borderRadius: 25,
    
    backgroundColor: 'blue',
    justifyContent: "center",
    alignItems: "center",
  },

  subtileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },

  heroesContainer: {
    width: '100%',
    height: 240,
    marginBottom: 10
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingHorizontal: 15,
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
