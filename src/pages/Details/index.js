import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles.js';

export default function Details({route}) {
  console.log(route.params)
  return (
    <View>
      <Text>Detalhes</Text>
    </View>
  );
}