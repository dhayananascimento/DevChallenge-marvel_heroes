import React from 'react';
import {Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles.js';

export default function Hero({data, images}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      onPress={() => {
        navigation.navigate('Details', {data: data, movies: images?.movies});
      }}>
      <ImageBackground
        source={images?.background}
        style={styles.marvelHero}
        imageStyle={{borderRadius: 15}}>
        <Text style={styles.heroAlterEgo}>{data?.alterEgo}</Text>
        <Text style={styles.heroName}>{data?.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
