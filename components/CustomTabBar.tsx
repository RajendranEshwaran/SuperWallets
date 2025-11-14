/**
 * Custom Tab Bar with Centered Plus Button
 * @format
 */

import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
} from 'react-native';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const CustomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const getIcon = (routeName: string, isFocused: boolean) => {
    const opacity = isFocused ? 1 : 0.5;
    const tintColor = isFocused ? '#667EEA' : isDarkMode ? '#8E8E93' : '#8E8E93';

    switch (routeName) {
      case 'Home':
        return (
          <Image
            source={require('../assets/tabIcon/home.png')}
            style={[styles.iconImage, {tintColor, opacity}]}
          />
        );
      case 'Analytics':
        return (
          <Image
            source={require('../assets/tabIcon/analytics.png')}
            style={[styles.iconImage, {tintColor, opacity}]}
          />
        );
      case 'CardDetails':
        return (
          <Image
            source={require('../assets/tabIcon/payments.png')}
            style={[styles.iconImage, {tintColor, opacity}]}
          />
        );
      case 'More':
        return (
          <Image
            source={require('../assets/tabIcon/more.png')}
            style={[styles.iconImage, {tintColor, opacity}]}
          />
        );
      default:
        return null;
    }
  };

  const getLabel = (routeName: string) => {
    switch (routeName) {
      case 'Home':
        return 'Home';
      case 'Analytics':
        return 'Analytics';
      case 'CardDetails':
        return 'Cards';
      case 'More':
        return 'More';
      default:
        return routeName;
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF',
          borderTopColor: isDarkMode ? '#2C2C2E' : '#E5E5EA',
        },
      ]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        // Add plus button in the middle (after 2nd tab)
        if (index === 2) {
          return (
            <React.Fragment key={`plus-${index}`}>
              <TouchableOpacity
                style={styles.plusButtonContainer}
                onPress={() => {
                  // Navigate to AddNewCard screen
                  const parentNav = navigation.getParent();
                  if (parentNav) {
                    parentNav.navigate('AddNewCard' as never);
                  }
                }}>
                <View style={styles.plusButton}>
                  <Text style={styles.plusIcon}>+</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? {selected: true} : {}}
                accessibilityLabel={descriptors[route.key].options.tabBarAccessibilityLabel}
                testID={descriptors[route.key].options.tabBarTestID}
                onPress={() => {
                  const event = navigation.emit({
                    type: 'tabPress',
                    target: route.key,
                    canPreventDefault: true,
                  });

                  if (!isFocused && !event.defaultPrevented) {
                    navigation.navigate(route.name);
                  }
                }}
                style={styles.tab}>
                {getIcon(route.name, isFocused)}
                <Text
                  style={[
                    styles.label,
                    {
                      color: isFocused
                        ? '#667EEA'
                        : isDarkMode
                        ? '#8E8E93'
                        : '#8E8E93',
                    },
                  ]}>
                  {getLabel(route.name)}
                </Text>
              </TouchableOpacity>
            </React.Fragment>
          );
        }

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={
              descriptors[route.key].options.tabBarAccessibilityLabel
            }
            testID={descriptors[route.key].options.tabBarTestID}
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }}
            style={styles.tab}>
            {getIcon(route.name, isFocused)}
            <Text
              style={[
                styles.label,
                {
                  color: isFocused
                    ? '#667EEA'
                    : isDarkMode
                    ? '#8E8E93'
                    : '#8E8E93',
                },
              ]}>
              {getLabel(route.name)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconImage: {
    width: 24,
    height: 24,
    marginBottom: 2,
    resizeMode: 'contain',
  },
  label: {
    fontSize: 11,
    fontWeight: '500',
  },
  plusButtonContainer: {
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
  },
  plusButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#7D73C3',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#67666B',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  plusIcon: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '300',
  },
});

export default CustomTabBar;
