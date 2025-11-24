/**
 * Analytics Tab Screen
 * @format
 */

import React from 'react';
import {View, Text, StyleSheet, ScrollView, useColorScheme, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationBar from '../../components/NavigationBar';

type NavigationProp = NativeStackNavigationProp<any>;

const AnalyticsTab: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<NavigationProp>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleNotificationPress = () => {
    Alert.alert('Notifications', 'View your notifications');
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000000' : '#F5F5F5'},
      ]}>
      {/* Navigation Bar */}
      <NavigationBar
        title="Analytics"
        leftIcon="←"
        onLeftPress={handleBackPress}
        onRightPress={handleNotificationPress}
      />

      {/* Content */}
      <ScrollView style={styles.content}>
        <Text
          style={[styles.placeholderText, {color: isDarkMode ? '#FFFFFF' : '#000000'}]}>
          Analytics content will go here
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  placeholderText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default AnalyticsTab;
