/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import initBase64 from './base64Polyfill'

AppRegistry.registerComponent(appName, () => App);
initBase64()
