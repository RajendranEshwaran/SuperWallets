/**
 * Dashboard Screen
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const Dashboard: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000000' : '#FFFFFF'},
      ]}>
      <Text style={[styles.text, {color: isDarkMode ? '#FFFFFF' : '#000000'}]}>
        Dashboard
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Dashboard;
