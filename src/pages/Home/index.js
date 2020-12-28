import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './styles.js';

import Hero from '../../components/Hero';
import MarvelData from '../../services/application.json';
import {photos} from "../../utils/util.js"

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
        <Text style={styles.normalText}>Bem vindo ao Marvel Heroes</Text>
        <Text style={styles.title}>Escolha o seu personagem</Text>

        <View style={styles.options}></View>

        <View style={styles.subtileContainer}>
          <Text style={styles.subtitle}>Heróis</Text>
          <Text style={styles.normalText}>Ver tudo</Text>
        </View>
        <View style={styles.heroesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Hero data={heroes[0]} images={photos.heroes.spiderMan} />
            <Hero data={heroes[1]} images={photos.heroes.blackPanther} />
            <Hero data={heroes[2]} images={photos.heroes.ironMan} />
          </ScrollView>
        </View>

        <View style={styles.subtileContainer}>
          <Text style={styles.subtitle}>Vilões</Text>
          <Text style={styles.normalText}>Ver tudo</Text>
        </View>
        <View style={styles.heroesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Hero data={villains[0]} images={photos.villains.redSkull} />
            <Hero data={villains[1]} images={photos.villains.drDoom} />
            <Hero data={villains[2]} images={photos.villains.greenGoblin} />
          </ScrollView>
        </View>

        <View style={styles.subtileContainer}>
          <Text style={styles.subtitle}>Anti-heróis</Text>
          <Text style={styles.normalText}>Ver tudo</Text>
        </View>
        <View style={styles.heroesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Hero data={antiHeroes[0]} images={photos.antiHeroes.deadpool} />
            <Hero data={antiHeroes[1]} images={photos.antiHeroes.venom} />
            <Hero data={antiHeroes[2]} images={photos.antiHeroes.punisher} />
          </ScrollView>
        </View>

        <View style={styles.subtileContainer}>
          <Text style={styles.subtitle}>Alienígenas</Text>
          <Text style={styles.normalText}>Ver tudo</Text>
        </View>
        <View style={styles.heroesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Hero data={aliens[0]} images={photos.aliens.thanos} />
            <Hero data={aliens[1]} images={photos.aliens.ronan} />
            <Hero data={aliens[2]} images={photos.aliens.talos} />
          </ScrollView>
        </View>

        <View style={styles.subtileContainer}>
          <Text style={styles.subtitle}>Humanos</Text>
          <Text style={styles.normalText}>Ver tudo</Text>
        </View>
        <View style={styles.heroesContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Hero data={humans[0]} images={photos.humans.howardStark}/>
            <Hero data={humans[1]} images={photos.humans.maryJane}/>
            <Hero data={humans[2]} images={photos.humans.happyHogan}/>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
