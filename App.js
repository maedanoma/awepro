/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/screen/LoginScreen';
import TeamNewsScreen from './src/screen/TeamNewsScreen';

const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          headerMode='none'>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="TeamNews" component={TeamNewsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
