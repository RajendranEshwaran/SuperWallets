/**
 * Analytics Tab Screen
 * @format
 */

import React from 'react';
import {View, Text, StyleSheet, ScrollView, useColorScheme} from 'react-native';

const AnalyticsTab: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000000' : '#F5F5F5'},
      ]}>
      <View style={styles.header}>
        <Text
          style={[styles.title, {color: isDarkMode ? '#FFFFFF' : '#000000'}]}>
          Analytics
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  }
});

export default AnalyticsTab;
