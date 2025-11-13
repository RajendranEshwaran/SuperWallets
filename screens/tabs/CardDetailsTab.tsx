/**
 * Card Details Tab Screen
 * @format
 */

import React from 'react';
import {View, Text, StyleSheet, ScrollView, useColorScheme} from 'react-native';

const CardDetailsTab: React.FC = () => {
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
          My Cards
        </Text>
      </View>

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
            Card Type
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
});

export default CardDetailsTab;
