import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StatusBar} from 'react-native';

import styles from './styles.js';

import MarvelData from '../../utils/application.json';
import {images} from '../../utils/util.js';

import HeroIcon from '../../assets/icons/hero.svg';
import AntiheroIcon from '../../assets/icons/antihero.svg';
import VillainIcon from '../../assets/icons/villain.svg';
import AlienIcon from '../../assets/icons/alien.svg';
import HumanIcon from '../../assets/icons/human.svg';

import CategoryOptions from '../../components/CategoryOptions/index.js';
import Category from '../../components/Category/index.js';

export default function Home() {
  const [antiHeroes, setAntiHeroes] = useState([]);
  const [villains, setVillains] = useState([]);
  const [heroes, setHeroes] = useState([]);
  const [aliens, setAliens] = useState([]);
  const [humans, setHumans] = useState([]);

  useEffect(() => {
    setAntiHeroes(MarvelData.antiHeroes);
    setVillains(MarvelData.villains);
    setHeroes(MarvelData.heroes);
    setAliens(MarvelData.aliens);
    setHumans(MarvelData.humans);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F8F8" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.welcome}>Bem vindo ao Marvel Heroes</Text>
        <Text style={styles.title}>Escolha o seu personagem</Text>

        <View style={styles.categories}>
          <CategoryOptions colors={['#005BEA', '#00C6FB']}>
            <HeroIcon />
          </CategoryOptions>

          <CategoryOptions colors={['#ED1D24', '#ED1F69']}>
            <VillainIcon />
          </CategoryOptions>

          <CategoryOptions colors={['#B224EF', '#7579FF']}>
            <AntiheroIcon />
          </CategoryOptions>

          <CategoryOptions colors={['#0BA360', '#3CBA92']}>
            <AlienIcon />
          </CategoryOptions>

          <CategoryOptions colors={['#FF7EB3', '#FF758C']}>
            <HumanIcon />
          </CategoryOptions>
        </View>

        <>
          <Category title="Heróis" data={heroes} images={images.heroes} />
          <Category title="Vilões" data={villains} images={images.villains} />
          <Category title="Anti-heróis" data={antiHeroes} images={images.antiHeroes} />
          <Category title="Alienígenas" data={aliens} images={images.aliens} />
          <Category title="Humanos" data={humans} images={images.humans} />
        </>
      </ScrollView>
    </View>
  );
}