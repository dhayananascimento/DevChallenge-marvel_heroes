import React from 'react';
import {TouchableOpacity} from 'react-native';

import styles from './styles.js';

import LinearGradient from 'react-native-linear-gradient';

export default function CategoryOptions({colors, children}) {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={colors}
        style={[styles.container]}>
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
}
