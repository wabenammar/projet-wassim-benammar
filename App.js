import * as React from 'react';
import Constants from 'expo-constants';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

// You can import from local files  
import Home from './components/Home';
import Contact from './components/Contact';
import Bar from './components/Bar';
import laCarte from './components/LaCarte';
import Viandes from './components/Viandes';
import Poissons from './components/Poissons';
import Vegan from './components/Vegan';
import background from './img/restaurant.jpg';


const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LaCarte" component={laCarte} />
        <Stack.Screen name="Bar" component={Bar} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Viandes" component={Viandes} />
        <Stack.Screen name="Poissons" component={Poissons} />
        <Stack.Screen name="Vegan" component={Vegan} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

