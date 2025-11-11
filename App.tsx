/**
 * SuperWallets App
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, useColorScheme} from 'react-native';
import GetStarted from './screens/GetStarted';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const handleGetStarted = () => {
    console.log('Get Started action triggered in App');
    // TODO: Navigate to the next screen or perform desired action
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#FFFFFF'}
      />
      <GetStarted onGetStarted={handleGetStarted} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
