/**
 * SuperWallets App
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import GetStarted from './screens/GetStarted';
import Dashboard from './screens/Dashboard';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [currentScreen, setCurrentScreen] = useState<'getstarted' | 'dashboard'>('getstarted');

  const handleGetStarted = () => {
    console.log('Navigating to Dashboard');
    setCurrentScreen('dashboard');
  };

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={isDarkMode ? '#000000' : '#FFFFFF'}
        />
        {currentScreen === 'getstarted' ? (
          <GetStarted onGetStarted={handleGetStarted} />
        ) : (
          <Dashboard />
        )}
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
