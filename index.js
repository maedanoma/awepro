/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// ここに最初に起動するappを指定する
AppRegistry.registerComponent(appName, () => App);
