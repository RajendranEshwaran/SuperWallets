/**
 * Dashboard Screen with Bottom Tab Navigation
 * @format
 */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTab from './tabs/HomeTab';
import AnalyticsTab from './tabs/AnalyticsTab';
import CardDetailsTab from './tabs/CardDetailsTab';
import MoreTab from './tabs/MoreTab';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

const Dashboard: React.FC = () => {
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

export default Dashboard;
