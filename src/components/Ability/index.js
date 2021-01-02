import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles.js';

export default function Ability({title, bars}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bars}>
        {bars.map((item, index) => {
          return <View key={index} style={item} />;
        })}
      </View>
    </View>
  );
}
