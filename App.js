/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Login from './src/components/Login';

const App: () => React$Node = () => {
  
  return (
    <>
      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default App;
