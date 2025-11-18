/**
 * Dashboard Screen with Bottom Tab Navigation and Stack Navigator
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeTab from './tabs/HomeTab';
import AnalyticsTab from './tabs/AnalyticsTab';
import CardDetailsTab from './tabs/CardDetailsTab';
import MoreTab from './tabs/MoreTab';
import AddNewCard from './AddNewCard';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tab Navigator Component
const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Analytics" component={AnalyticsTab} />
      <Tab.Screen name="CardDetails" component={CardDetailsTab} />
      <Tab.Screen name="More" component={MoreTab} />
    </Tab.Navigator>
  );
};

// Main Dashboard with Stack Navigator
const Dashboard: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTabs" component={TabNavigator} />
      <Stack.Screen
        name="AddNewCard"
        component={AddNewCard}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
};

export default Dashboard;
