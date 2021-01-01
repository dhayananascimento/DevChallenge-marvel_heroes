import React from 'react';
import {View, Text, ImageBackground, ScrollView, StatusBar} from 'react-native';

import styles from './styles.js';

import Age from '../../assets/icons/age.svg';
import Universe from '../../assets/icons/universe.svg';
import Weight from '../../assets/icons/weight.svg';
import Height from '../../assets/icons/height.svg';

export default function Details({route}) {
  const {data, movies, background} = route.params;
  const year = new Date().getFullYear();

  let force = [];
  let velocity = [];
  let endurance = [];
  let intelligence = [];
  let agility = [];

  for (let index = 1; index <= 44; index++) {
    let forceValue = Math.ceil((data.abilities.force * 44) / 100);
    let velocityValue = Math.ceil((data.abilities.velocity * 44) / 100);
    let enduranceValue = Math.ceil((data.abilities.endurance * 44) / 100);
    let intelligenceValue = Math.ceil((data.abilities.intelligence * 44) / 100);
    let agilityValue = Math.ceil((data.abilities.agility * 44) / 100);

    if (index < forceValue) force.push(styles.barLess);
    if (index == forceValue) force.push(styles.barEqual);
    if (index > forceValue) force.push(styles.barMore);

    if (index < velocityValue) velocity.push(styles.barLess);
    if (index == velocityValue) velocity.push(styles.barEqual);
    if (index > velocityValue) velocity.push(styles.barMore);

    if (index < enduranceValue) endurance.push(styles.barLess);
    if (index == enduranceValue) endurance.push(styles.barEqual);
    if (index > enduranceValue) endurance.push(styles.barMore);

    if (index < intelligenceValue) intelligence.push(styles.barLess);
    if (index == intelligenceValue) intelligence.push(styles.barEqual);
    if (index > intelligenceValue) intelligence.push(styles.barMore);

    if (index < agilityValue) agility.push(styles.barLess);
    if (index == agilityValue) agility.push(styles.barEqual);
    if (index > agilityValue) agility.push(styles.barMore);
  }

  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={background} style={styles.imageBackground}>
          <Text style={styles.alterEgo}>{data.alterEgo}</Text>
          <Text style={styles.name}>{data.name.replace(' ', '\n')}</Text>

          <View style={styles.caracteristics}>
            <View style={{alignItems: 'center'}}>
              <Age opacity={0.6} />
              <Text style={styles.caracteristicsItem}>
                {year - data.caracteristics.birth} anos
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Weight opacity={0.6} />
              <Text style={styles.caracteristicsItem}>
                {data.caracteristics.weight.value}
                {data.caracteristics.weight.unity}
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Height opacity={0.6} />
              <Text style={styles.caracteristicsItem}>
                {data.caracteristics.height.value.toFixed(2)}m
              </Text>
            </View>

            <View style={{alignItems: 'center'}}>
              <Universe opacity={0.6} />
              <Text style={styles.caracteristicsItem}>
                {data.caracteristics.universe}
              </Text>
            </View>
          </View>
        </ImageBackground>

        <Text style={styles.biography}>{data.biography}</Text>

        <Text style={styles.title}>Habilidades</Text>
        <View style={{paddingHorizontal: 15}}>
          <View style={styles.abilities}>
            <Text style={styles.abilitiesTitle}>Força</Text>
            <View style={styles.barsContainer}>
              {force.map((item, index) => {
                return <View key={index} style={item} />;
              })}
            </View>
          </View>
          <View style={styles.abilities}>
            <Text style={styles.abilitiesTitle}>Inteligência</Text>
            <View style={styles.barsContainer}>
              {intelligence.map((item, index) => {
                return <View key={index} style={item} />;
              })}
            </View>
          </View>
          <View style={styles.abilities}>
            <Text style={styles.abilitiesTitle}>Agilidade</Text>
            <View style={styles.barsContainer}>
              {agility.map((item, index) => {
                return <View key={index} style={item} />;
              })}
            </View>
          </View>
          <View style={styles.abilities}>
            <Text style={styles.abilitiesTitle}>Resistência</Text>
            <View style={styles.barsContainer}>
              {endurance.map((item, index) => {
                return <View key={index} style={item} />;
              })}
            </View>
          </View>
          <View style={styles.abilities}>
            <Text style={styles.abilitiesTitle}>Velocidade</Text>
            <View style={styles.barsContainer}>
              {velocity.map((item, index) => {
                return <View key={index} style={item} />;
              })}
            </View>
          </View>
        </View>

        <Text style={styles.title}>Filmes</Text>
        <View style={{marginBottom: 20}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {movies.map((movie, index) => (
              <ImageBackground
                key={index}
                source={movie}
                style={styles.movie}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
