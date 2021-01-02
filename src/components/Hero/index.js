import React from 'react';
import {Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles.js';

export default function Hero({data, images}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate('Details', {
          data: data,
          movies: images?.movies,
          background: images?.background,
        });
      }}>
      <ImageBackground
        source={images?.background}
        style={styles.container}
        imageStyle={{borderRadius: 15}}>
        <Text style={styles.alterEgo}>{data?.alterEgo}</Text>
        <Text style={styles.name}>{data?.name.replace(' ', '\n')}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}