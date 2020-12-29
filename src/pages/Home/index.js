import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import styles from './styles.js';

import Hero from '../../components/Hero';

import MarvelData from '../../services/application.json';
import {images} from '../../utils/util.js';

import HeroIcon from '../../assets/icons/hero.svg';
import AntiheroIcon from '../../assets/icons/antihero.svg';
import VillainIcon from '../../assets/icons/villain.svg';
import AlienIcon from '../../assets/icons/alien.svg';
import HumanIcon from '../../assets/icons/human.svg';

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
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={[styles.normalText, {paddingHorizontal: 15}]}>
          Bem vindo ao Marvel Heroes
        </Text>
        <Text style={styles.title}>Escolha o seu personagem</Text>

        <View style={styles.categories}>
          <TouchableOpacity activeOpacity={0.6} style={[styles.category, {backgroundColor: 'blue'}]}>
            <HeroIcon fill={'white'} />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={[styles.category, {backgroundColor: 'red'}]}>
            <VillainIcon />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6}
            style={[styles.category, {backgroundColor: 'purple'}]}>
            <AntiheroIcon />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={[styles.category, {backgroundColor: 'green'}]}>
            <AlienIcon />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={[styles.category, {backgroundColor: 'pink'}]}>
            <HumanIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.subtileContainer}>
          <Text style={styles.subtitle}>Heróis</Text>
          <Text style={styles.normalText}>Ver tudo</Text>
        </View>
        <View style={styles.heroesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Hero data={heroes[0]} images={images.heroes.spiderMan} />
            <Hero data={heroes[1]} images={images.heroes.blackPanther} />
            <Hero data={heroes[2]} images={images.heroes.ironMan} />
          </ScrollView>
        </View>

        <View style={styles.subtileContainer}>
          <Text style={styles.subtitle}>Vilões</Text>
          <Text style={styles.normalText}>Ver tudo</Text>
        </View>
        <View style={styles.heroesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Hero data={villains[0]} images={images.villains.redSkull} />
            <Hero data={villains[1]} images={images.villains.drDoom} />
            <Hero data={villains[2]} images={images.villains.greenGoblin} />
          </ScrollView>
        </View>

        <View style={styles.subtileContainer}>
          <Text style={styles.subtitle}>Anti-heróis</Text>
          <Text style={styles.normalText}>Ver tudo</Text>
        </View>
        <View style={styles.heroesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Hero data={antiHeroes[0]} images={images.antiHeroes.deadpool} />
            <Hero data={antiHeroes[1]} images={images.antiHeroes.venom} />
            <Hero data={antiHeroes[2]} images={images.antiHeroes.punisher} />
          </ScrollView>
        </View>

        <View style={styles.subtileContainer}>
          <Text style={styles.subtitle}>Alienígenas</Text>
          <Text style={styles.normalText}>Ver tudo</Text>
        </View>
        <View style={styles.heroesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Hero data={aliens[0]} images={images.aliens.thanos} />
            <Hero data={aliens[1]} images={images.aliens.ronan} />
            <Hero data={aliens[2]} images={images.aliens.talos} />
          </ScrollView>
        </View>

        <View style={styles.subtileContainer}>
          <Text style={styles.subtitle}>Humanos</Text>
          <Text style={styles.normalText}>Ver tudo</Text>
        </View>
        <View style={styles.heroesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Hero data={humans[0]} images={images.humans.howardStark} />
            <Hero data={humans[1]} images={images.humans.maryJane} />
            <Hero data={humans[2]} images={images.humans.happyHogan} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
