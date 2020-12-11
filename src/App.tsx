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
import {store} from './store';
import {ThemeProvider} from 'styled-components';
import {defaultTheme} from './styles/theme';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <SafeAreaView style={styles.container}>
          <AppNavigation />
        </SafeAreaView>
      </ThemeProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
