import React from 'react';
import {View, Text, ImageBackground, Image, ScrollView, Dimensions} from 'react-native';

import styles from './styles.js';

import Age from '../../assets/icons/age.svg';
import Universe from '../../assets/icons/universe.svg';
import Weight from '../../assets/icons/weight.svg';
import Height from '../../assets/icons/height.svg';

export default function Details({route}) {
  const {data, movies, background} = route.params;
  const year = new Date().getFullYear();

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={background}
          style={{width: '100%', height: 500, justifyContent: 'flex-end'}}>
          <Text style={{color: 'white', fontSize: 16, paddingHorizontal: 15}}>
            {data.alterEgo}
          </Text>
          <Text style={{color: 'white', fontSize: 34, paddingHorizontal: 15}}>
            {data.name.replace(' ', '\n')}
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              paddingHorizontal: 15,
              marginTop: 25,
            }}>
            <View style={{alignItems: 'center'}}>
              <Age />
              <Text style={{marginVertical: 10, color: 'white'}}>
                {year - data.caracteristics.birth} anos
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Weight />
              <Text style={{marginVertical: 10, color: 'white'}}>
                {data.caracteristics.weight.value}
                {data.caracteristics.weight.unity}
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Height />
              <Text style={{marginVertical: 10, color: 'white'}}>
                {data.caracteristics.height.value.toFixed(2)}m
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Universe />
              <Text style={{marginVertical: 10, color: 'white'}}>
                {data.caracteristics.universe}
              </Text>
            </View>
          </View>
        </ImageBackground>

        <Text style={{color: 'white', paddingHorizontal: 15}}>
          {data.biography}
        </Text>

        <Text
          style={{
            color: 'white',
            marginVertical: 15,
            fontSize: 18,
            paddingHorizontal: 15,
          }}>
          Habilidades
        </Text>
        <View style={{paddingHorizontal: 15}}>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Text style={{color: 'white', width: 100}}>Força</Text>
            <View
              style={{
                backgroundColor: 'pink',
                width: Dimensions.get('window').width - 130,
                flexDirection: 'row',
              }}>

            </View>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Text style={{color: 'white', width: 100}}>Inteligência</Text>
            <View
              style={{
                backgroundColor: 'pink',
                width: Dimensions.get('window').width - 130,
                flexDirection: 'row',
              }}>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Text style={{color: 'white', width: 100}}>Agilidade</Text>
            <View
              style={{
                backgroundColor: 'pink',
                width: Dimensions.get('window').width - 130,
                flexDirection: 'row',
              }}>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Text style={{color: 'white', width: 100}}>Resistência</Text>
            <View
              style={{
                backgroundColor: 'pink',
                width: Dimensions.get('window').width - 130,
                flexDirection: 'row',
              }}>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <Text style={{color: 'white', width: 100}}>Velocidade</Text>
            <View
              style={{
                backgroundColor: 'pink',
                width: Dimensions.get('window').width - 130,
                flexDirection: 'row',
              }}>
            </View>
          </View>
        </View>

        <Text
          style={{
            color: 'white',
            marginVertical: 15,
            fontSize: 18,
            paddingHorizontal: 15,
          }}>
          Filmes
        </Text>
        <View style={{marginBottom: 20}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {movies.map((movie, index) => (
              <ImageBackground
                key={index}
                source={movie}
                style={{
                  marginHorizontal: 10,
                  width: 140,
                  height: 240,
                  borderRadius: 15,
                  overflow: 'hidden',
                  backgroundColor: 'pink',
                }}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
