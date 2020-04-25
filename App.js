/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screen/LoginScreen';

const App: () => React$Node = () => {

  const Stack = createStackNavigator();
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          headerMode='none'>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
