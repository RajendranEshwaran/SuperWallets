/**
 * Navigation Bar Component
 * Reusable navigation bar with left icon, center title, and right icon
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  StatusBar,
} from 'react-native';

interface NavigationBarProps {
  title: string;
  onLeftPress?: () => void;
  onRightPress?: () => void;
  leftIcon?: string;
  rightIcon?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  title,
  onLeftPress,
  onRightPress,
  leftIcon = '☰',
  rightIcon = '🔔',
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#F5F5F5'}
      />
      <View
        style={[
          styles.container,
          {backgroundColor: isDarkMode ? '#000000' : '#F5F5F5'},
        ]}>
        {/* Left Icon */}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onLeftPress}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Text style={[styles.leftIcon, {color: isDarkMode ? '#FFFFFF' : '#000000'}]}>
            {leftIcon}
          </Text>
        </TouchableOpacity>

        {/* Center Title */}
        <View style={styles.titleContainer}>
          <Text
            style={[styles.title, {color: isDarkMode ? '#FFFFFF' : '#000000'}]}
            numberOfLines={1}>
            {title}
          </Text>
        </View>

        {/* Right Icon */}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onRightPress}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Text style={styles.rightIcon}>{rightIcon}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
  },
  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIcon: {
    fontSize: 24,
    fontWeight: '600',
  },
  rightIcon: {
    fontSize: 24,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default NavigationBar;
