/**
 * Home Tab Screen
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  useColorScheme,
} from 'react-native';

const HomeTab: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000000' : '#F5F5F5'},
      ]}>
      <View style={[styles.balanceCard, {backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF'}]}>
        <Text style={[styles.balanceLabel, {color: isDarkMode ? '#CCCCCC' : '#666666'}]}>
          Total Balance
        </Text>
        <Text style={[styles.balanceAmount, {color: isDarkMode ? '#FFFFFF' : '#000000'}]}>
          $12,345.67
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
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    marginTop: 4,
  },
  balanceCard: {
    margin: 20,
    padding: 24,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  balanceLabel: {
    fontSize: 14,
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
  }
});

export default HomeTab;
