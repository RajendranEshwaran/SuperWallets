/**
 * Analytics Tab Screen
 * @format
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, useColorScheme, Alert, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LineChart, BarChart} from 'react-native-chart-kit';
import NavigationBar from '../../components/NavigationBar';

const screenWidth = Dimensions.get('window').width;

type NavigationProp = NativeStackNavigationProp<any>;
type TimePeriod = 'day' | 'week' | 'month' | 'year';
type DataType = 'income' | 'expenses';

const AnalyticsTab: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<NavigationProp>();
  const [selectedType, setSelectedType] = useState<DataType>('income');
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>('week');

  // Sample data for different time periods
  const incomeDataByPeriod = {
    day: {
      labels: ['12AM', '4AM', '8AM', '12PM', '4PM', '8PM'],
      data: [0, 0, 150, 320, 280, 180],
      total: 930,
      average: 155,
    },
    week: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [450, 520, 480, 620, 580, 380, 420],
      total: 3450,
      average: 493,
    },
    month: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [3200, 3500, 3100, 4200],
      total: 14000,
      average: 3500,
    },
    year: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      data: [3200, 3500, 3100, 4200, 3800, 4500, 4100, 3900, 4300, 4600, 4800, 5000],
      total: 48000,
      average: 4000,
    },
  };

  const expensesDataByPeriod = {
    day: {
      labels: ['12AM', '4AM', '8AM', '12PM', '4PM', '8PM'],
      data: [0, 0, 80, 180, 220, 150],
      total: 630,
      average: 105,
    },
    week: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      data: [320, 380, 340, 420, 460, 280, 320],
      total: 2520,
      average: 360,
    },
    month: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      data: [2100, 2400, 2200, 2800],
      total: 9500,
      average: 2375,
    },
    year: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      data: [2100, 2400, 2200, 2800, 2600, 3100, 2900, 2700, 3000, 3200, 3300, 3500],
      total: 32700,
      average: 2725,
    },
  };

  const getCurrentData = () => {
    const dataSource = selectedType === 'income' ? incomeDataByPeriod : expensesDataByPeriod;
    return dataSource[selectedPeriod];
  };

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
        {/* Income/Expenses Segment Control */}
        <View
          style={[
            styles.card,
            {backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF'},
          ]}>
          <Text
            style={[
              styles.sectionTitle,
              {color: isDarkMode ? '#FFFFFF' : '#000000'},
            ]}>
            Financial Analytics
          </Text>

          <View style={styles.segmentControl}>
            <TouchableOpacity
              style={[
                styles.segmentButton,
                selectedType === 'income' && styles.segmentButtonActive,
              ]}
              onPress={() => setSelectedType('income')}>
              <Text
                style={[
                  styles.segmentButtonText,
                  {color: selectedType === 'income' ? '#FFFFFF' : (isDarkMode ? '#CCCCCC' : '#666666')},
                ]}>
                Income
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.segmentButton,
                selectedType === 'expenses' && styles.segmentButtonActive,
              ]}
              onPress={() => setSelectedType('expenses')}>
              <Text
                style={[
                  styles.segmentButtonText,
                  {color: selectedType === 'expenses' ? '#FFFFFF' : (isDarkMode ? '#CCCCCC' : '#666666')},
                ]}>
                Expenses
              </Text>
            </TouchableOpacity>
          </View>

          {/* Time Period Selector */}
          <View style={styles.timePeriodContainer}>
            {(['day', 'week', 'month', 'year'] as TimePeriod[]).map((period) => (
              <TouchableOpacity
                key={period}
                style={[
                  styles.periodButton,
                  selectedPeriod === period && styles.periodButtonActive,
                  {backgroundColor: selectedPeriod === period ? (selectedType === 'income' ? '#8B5CF6' : '#FF3B30') : 'rgba(128, 128, 128, 0.1)'},
                ]}
                onPress={() => setSelectedPeriod(period)}>
                <Text
                  style={[
                    styles.periodButtonText,
                    {color: selectedPeriod === period ? '#FFFFFF' : (isDarkMode ? '#CCCCCC' : '#666666')},
                  ]}>
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Chart */}
          <View style={styles.chartContainer}>
            {selectedPeriod === 'week' || selectedPeriod === 'day' ? (
              <BarChart
                data={{
                  labels: getCurrentData().labels,
                  datasets: [{data: getCurrentData().data}],
                }}
                width={screenWidth - 80}
                height={220}
                yAxisLabel="$"
                chartConfig={{
                  backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF',
                  backgroundGradientFrom: isDarkMode ? '#1C1C1E' : '#FFFFFF',
                  backgroundGradientTo: isDarkMode ? '#1C1C1E' : '#FFFFFF',
                  decimalPlaces: 0,
                  color: (opacity = 1) =>
                    selectedType === 'income'
                      ? `rgba(139, 92, 246, ${opacity})`
                      : `rgba(255, 59, 48, ${opacity})`,
                  labelColor: (opacity = 1) => isDarkMode ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  barPercentage: 0.6,
                }}
                style={styles.chart}
              />
            ) : (
              <LineChart
                data={{
                  labels: getCurrentData().labels,
                  datasets: [{
                    data: getCurrentData().data,
                    color: (opacity = 1) =>
                      selectedType === 'income'
                        ? `rgba(139, 92, 246, ${opacity})`
                        : `rgba(255, 59, 48, ${opacity})`,
                    strokeWidth: 3,
                  }],
                }}
                width={screenWidth - 80}
                height={220}
                yAxisLabel="$"
                chartConfig={{
                  backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF',
                  backgroundGradientFrom: isDarkMode ? '#1C1C1E' : '#FFFFFF',
                  backgroundGradientTo: isDarkMode ? '#1C1C1E' : '#FFFFFF',
                  decimalPlaces: 0,
                  color: (opacity = 1) =>
                    selectedType === 'income'
                      ? `rgba(139, 92, 246, ${opacity})`
                      : `rgba(255, 59, 48, ${opacity})`,
                  labelColor: (opacity = 1) => isDarkMode ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: '5',
                    strokeWidth: '2',
                    stroke: selectedType === 'income' ? '#8B5CF6' : '#FF3B30',
                  },
                }}
                bezier
                style={styles.chart}
              />
            )}
          </View>

          {/* Summary Stats */}
          <View style={styles.summaryContainer}>
            <View style={styles.summaryItem}>
              <Text
                style={[
                  styles.summaryLabel,
                  {color: isDarkMode ? '#CCCCCC' : '#666666'},
                ]}>
                Total
              </Text>
              <Text
                style={[
                  styles.summaryValue,
                  {color: selectedType === 'income' ? '#8B5CF6' : '#FF3B30'},
                ]}>
                ${getCurrentData().total.toLocaleString()}
              </Text>
            </View>
            <View style={styles.summaryItem}>
              <Text
                style={[
                  styles.summaryLabel,
                  {color: isDarkMode ? '#CCCCCC' : '#666666'},
                ]}>
                Average
              </Text>
              <Text
                style={[
                  styles.summaryValue,
                  {color: isDarkMode ? '#FFFFFF' : '#000000'},
                ]}>
                ${getCurrentData().average.toLocaleString()}
              </Text>
            </View>
            <View style={styles.summaryItem}>
              <Text
                style={[
                  styles.summaryLabel,
                  {color: isDarkMode ? '#CCCCCC' : '#666666'},
                ]}>
                Period
              </Text>
              <Text
                style={[
                  styles.summaryValue,
                  {color: isDarkMode ? '#FFFFFF' : '#000000'},
                ]}>
                {selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)}
              </Text>
            </View>
          </View>
        </View>
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
  card: {
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
  },
  segmentControl: {
    flexDirection: 'row',
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    borderRadius: 10,
    padding: 4,
    marginBottom: 20,
  },
  segmentButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  segmentButtonActive: {
    backgroundColor: '#667EEA',
  },
  segmentButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  timePeriodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 8,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  periodButtonActive: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  periodButtonText: {
    fontSize: 12,
    fontWeight: '600',
  },
  chartContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(128, 128, 128, 0.2)',
  },
  summaryItem: {
    alignItems: 'center',
  },
  summaryLabel: {
    fontSize: 12,
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default AnalyticsTab;
