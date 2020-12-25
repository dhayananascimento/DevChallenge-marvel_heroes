import React from 'react';
import {View} from 'react-native';

import Marvel from '../../assets/icons/marvel.svg';
import Search from '../../assets/icons/search.svg';
import Menu from '../../assets/icons/menu.svg';
import styles from './styles.js';

export default function Header() {
  return (
    <View style={styles.container}>
      <Menu />
      <Marvel />
      <Search />
    </View>
  );
}
