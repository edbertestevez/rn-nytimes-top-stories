/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

//Temporary
LogBox.ignoreLogs(['Setting a timer']);
LogBox.ignoreLogs(['SerializableState']);

AppRegistry.registerComponent(appName, () => App);
