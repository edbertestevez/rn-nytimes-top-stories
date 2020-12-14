/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppNavigation from './navigation/AppNavigation';
import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './styles/theme';
import {PersistGate} from 'redux-persist/integration/react';
import {ReduxNetworkProvider} from 'react-native-offline';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReduxNetworkProvider>
          <ThemeProvider theme={defaultTheme}>
            <SafeAreaView style={styles.container}>
              <AppNavigation />
            </SafeAreaView>
          </ThemeProvider>
        </ReduxNetworkProvider>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
