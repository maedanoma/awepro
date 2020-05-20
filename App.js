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

import LoginScreen from './src/screen/login/LoginScreen';
import DrawerNavigator from './src/screen/navigator/DrawerNavigator';

const App: () => React$Node = () => {
  const Stack = createStackNavigator();
  return (
    <DrawerNavigator />
    // <>
    //   <NavigationContainer>
    //     <Stack.Navigator
    //       initialRouteName='Login'
    //       headerMode='none'
    //       screenOptions={{
    //         animationEnabled: false
    //       }}>
    //       <Stack.Screen name="Login" component={LoginScreen} />
    //       <Stack.Screen name="Home" component={DrawerNavigator} />
    //     </Stack.Navigator>
    //   </NavigationContainer>
    // </>
  )
}

export default App;
