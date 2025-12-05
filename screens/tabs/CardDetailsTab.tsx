/**
 * Card Details Tab Screen
 * @format
 */

import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, useColorScheme, Alert, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {LineChart} from 'react-native-chart-kit';
import NavigationBar from '../../components/NavigationBar';

const screenWidth = Dimensions.get('window').width;

type NavigationProp = NativeStackNavigationProp<any>;

const CardDetailsTab: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<NavigationProp>();
  const [selectedSegment, setSelectedSegment] = useState<'income' | 'expenses'>('income');

  // Sample data for the current year (2025)
  const incomeData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [3200, 3500, 3100, 4200, 3800, 4500, 4100, 3900, 4300, 4600, 4800, 5000],
        color: (opacity = 1) => `rgba(139, 92, 246, ${opacity})`,
        strokeWidth: 3,
      },
    ],
  };

  const expensesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [2100, 2400, 2200, 2800, 2600, 3100, 2900, 2700, 3000, 3200, 3300, 3500],
        color: (opacity = 1) => `rgba(255, 59, 48, ${opacity})`,
        strokeWidth: 3,
      },
    ],
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
        title="My Cards"
        leftIcon="←"
        onLeftPress={handleBackPress}
        onRightPress={handleNotificationPress}
      />

      {/* Content */}
      <ScrollView style={styles.content}>

      <View style={styles.cardContainer}>
        <View style={[styles.creditCard, styles.gradientCard]}>
          <Text style={styles.cardLabel}>CREDIT CARD</Text>
          <Text style={styles.cardNumber}>•••• •••• •••• 4242</Text>
          <View style={styles.cardFooter}>
            <View>
              <Text style={styles.cardFooterLabel}>Card Holder</Text>
              <Text style={styles.cardFooterValue}>John Doe</Text>
            </View>
            <View>
              <Text style={styles.cardFooterLabel}>Expires</Text>
              <Text style={styles.cardFooterValue}>12/25</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={[
          styles.detailsCard,
          {backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF'},
        ]}>
        <Text
          style={[
            styles.detailsTitle,
            {color: isDarkMode ? '#FFFFFF' : '#000000'},
          ]}>
          Card Details
        </Text>
        <View style={styles.detailItem}>
          <Text
            style={[
              styles.detailLabel,
              {color: isDarkMode ? '#CCCCCC' : '#666666'},
            ]}>
            Card Types
          </Text>
          <Text
            style={[
              styles.detailValue,
              {color: isDarkMode ? '#FFFFFF' : '#000000'},
            ]}>
            Visa
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Text
            style={[
              styles.detailLabel,
              {color: isDarkMode ? '#CCCCCC' : '#666666'},
            ]}>
            Card Limit
          </Text>
          <Text
            style={[
              styles.detailValue,
              {color: isDarkMode ? '#FFFFFF' : '#000000'},
            ]}>
            $10,000
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Text
            style={[
              styles.detailLabel,
              {color: isDarkMode ? '#CCCCCC' : '#666666'},
            ]}>
            Available Credit
          </Text>
          <Text
            style={[
              styles.detailValue,
              {color: isDarkMode ? '#FFFFFF' : '#000000'},
            ]}>
            $7,345
          </Text>
        </View>
      </View>

      {/* Income & Expenses Section */}
      <View
        style={[
          styles.analyticsCard,
          {backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF'},
        ]}>
        <Text
          style={[
            styles.detailsTitle,
            {color: isDarkMode ? '#FFFFFF' : '#000000'},
          ]}>
          Financial Overview (2025)
        </Text>

        {/* Segment Control */}
        <View style={styles.segmentControl}>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              selectedSegment === 'income' && styles.segmentButtonActive,
            ]}
            onPress={() => setSelectedSegment('income')}>
            <Text
              style={[
                styles.segmentButtonText,
                selectedSegment === 'income' && styles.segmentButtonTextActive,
                {color: selectedSegment === 'income' ? '#FFFFFF' : (isDarkMode ? '#CCCCCC' : '#666666')},
              ]}>
              Income
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              selectedSegment === 'expenses' && styles.segmentButtonActive,
            ]}
            onPress={() => setSelectedSegment('expenses')}>
            <Text
              style={[
                styles.segmentButtonText,
                selectedSegment === 'expenses' && styles.segmentButtonTextActive,
                {color: selectedSegment === 'expenses' ? '#FFFFFF' : (isDarkMode ? '#CCCCCC' : '#666666')},
              ]}>
              Expenses
            </Text>
          </TouchableOpacity>
        </View>

        {/* Chart */}
        <View style={styles.chartContainer}>
          <LineChart
            data={selectedSegment === 'income' ? incomeData : expensesData}
            width={screenWidth - 80}
            height={220}
            chartConfig={{
              backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF',
              backgroundGradientFrom: isDarkMode ? '#1C1C1E' : '#FFFFFF',
              backgroundGradientTo: isDarkMode ? '#1C1C1E' : '#FFFFFF',
              decimalPlaces: 0,
              color: (opacity = 1) =>
                selectedSegment === 'income'
                  ? `rgba(139, 92, 246, ${opacity})`
                  : `rgba(255, 59, 48, ${opacity})`,
              labelColor: (opacity = 1) => isDarkMode ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: '4',
                strokeWidth: '2',
                stroke: selectedSegment === 'income' ? '#8B5CF6' : '#FF3B30',
              },
            }}
            bezier
            style={styles.chart}
          />
        </View>

        {/* Summary Stats */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryItem}>
            <Text
              style={[
                styles.summaryLabel,
                {color: isDarkMode ? '#CCCCCC' : '#666666'},
              ]}>
              Total {selectedSegment === 'income' ? 'Income' : 'Expenses'}
            </Text>
            <Text
              style={[
                styles.summaryValue,
                {color: selectedSegment === 'income' ? '#8B5CF6' : '#FF3B30'},
              ]}>
              ${selectedSegment === 'income' ? '48,000' : '32,700'}
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
              ${selectedSegment === 'income' ? '4,000' : '2,725'}
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
  },
  cardContainer: {
    padding: 20,
  },
  creditCard: {
    height: 200,
    borderRadius: 16,
    padding: 24,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  gradientCard: {
    backgroundColor: '#667EEA',
  },
  cardLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 2,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardFooterLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 10,
    marginBottom: 4,
  },
  cardFooterValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  detailsCard: {
    margin: 20,
    marginTop: 0,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(128, 128, 128, 0.2)',
  },
  detailLabel: {
    fontSize: 16,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  analyticsCard: {
    margin: 20,
    marginTop: 0,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  segmentControl: {
    flexDirection: 'row',
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
    borderRadius: 10,
    padding: 4,
    marginTop: 16,
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
  segmentButtonTextActive: {
    color: '#FFFFFF',
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
    fontSize: 14,
    marginBottom: 8,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default CardDetailsTab;
