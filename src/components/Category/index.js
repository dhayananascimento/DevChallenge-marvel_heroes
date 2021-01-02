import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './styles.js';

import Hero from '../Hero/index.js';

export default function Category({title, data, images}) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.normalText}>Ver tudo</Text>
      </View>

      <View style={styles.heroesContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((hero, index) => (
            <Hero key={index} data={data[index]} images={images[index]} />
          ))}
        </ScrollView>
      </View>
    </>
  );
}
