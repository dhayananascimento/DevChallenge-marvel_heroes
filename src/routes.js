import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home/index.js';
import Details from './pages/Details/index.js';
import Header from './components/Header/index.js';

const {Navigator, Screen} = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          options={{
            header: () => <Header />,
          }}
          name="Home"
          component={Home}
        />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
}
