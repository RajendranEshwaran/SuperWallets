/**
 * More Tab Screen
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import NavigationBar from '../../components/NavigationBar';

type NavigationProp = NativeStackNavigationProp<any>;

const MoreTab: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<NavigationProp>();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleNotificationPress = () => {
    Alert.alert('Notifications', 'View your notifications');
  };

  const menuItems = [
    {title: 'Profile Settings', icon: '👤'},
    {title: 'Security', icon: '🔒'},
    {title: 'Notifications', icon: '🔔'},
    {title: 'Help & Support', icon: '💬'},
    {title: 'About', icon: 'ℹ️'},
  ];

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000000' : '#F5F5F5'},
      ]}>
      {/* Navigation Bar */}
      <NavigationBar
        title="More"
        leftIcon="←"
        onLeftPress={handleBackPress}
        onRightPress={handleNotificationPress}
      />

      {/* Content */}
      <ScrollView style={styles.content}>

      <View
        style={[
          styles.profileCard,
          {backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF'},
        ]}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JD</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text
            style={[
              styles.profileName,
              {color: isDarkMode ? '#FFFFFF' : '#000000'},
            ]}>
            John Doe
          </Text>
          <Text
            style={[
              styles.profileEmail,
              {color: isDarkMode ? '#CCCCCC' : '#666666'},
            ]}>
            john.doe@example.com
          </Text>
        </View>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.menuItem,
              {backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF'},
            ]}>
            <View style={styles.menuItemContent}>
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text
                style={[
                  styles.menuTitle,
                  {color: isDarkMode ? '#FFFFFF' : '#000000'},
                ]}>
                {item.title}
              </Text>
            </View>
            <Text
              style={[
                styles.menuArrow,
                {color: isDarkMode ? '#CCCCCC' : '#666666'},
              ]}>
              ›
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
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
  },
  profileCard: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#667EEA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
  },
  menuContainer: {
    padding: 20,
    paddingTop: 0,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  menuArrow: {
    fontSize: 24,
  },
  logoutButton: {
    margin: 20,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#F44336',
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default MoreTab;
