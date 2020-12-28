import React from 'react';
import {View} from 'react-native';

import styles from './styles.js';

import Marvel from '../../assets/icons/marvel.svg';
import Search from '../../assets/icons/search.svg';
import Menu from '../../assets/icons/menu.svg';

export default function Header() {
  return (
    <View style={styles.container}>
      <Menu />
      <Marvel />
      <Search />
    </View>
  );
}
