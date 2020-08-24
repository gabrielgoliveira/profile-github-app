import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/pages/Home';
import Profile from './src/pages/Profile';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          options = {
            {headerShown: false}
          }
          name="Home" 
          component={Home}
        />
        <Stack.Screen 
          options = {
            {headerShown: false}
          }
          name="Profile" 
          component={Profile}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}