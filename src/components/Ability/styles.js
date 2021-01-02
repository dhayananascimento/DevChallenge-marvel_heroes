import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  title: {
    width: 100,
    fontSize: 12,
    opacity: 0.75,
    color: '#fff',
    fontFamily: 'gelroy-regular',
  },

  bars: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    width: Dimensions.get('window').width - 130,
  },
});

export default styles;
