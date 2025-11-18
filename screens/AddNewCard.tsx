/**
 * Add New Card Screen
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  ScrollView,
  TextInput,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<any>;

const AddNewCard: React.FC<Props> = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#000000' : '#F5F5F5'},
      ]}>
      {/* Header */}
      <View
        style={[
          styles.header,
          {backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF'},
        ]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text
          style={[styles.headerTitle, {color: isDarkMode ? '#FFFFFF' : '#000000'}]}>
          Add New Card
        </Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content}>
        <View style={styles.form}>
          {/* Card Preview */}
          <View style={[styles.cardPreview, styles.gradientCard]}>
            <Text style={styles.cardPreviewLabel}>CARD PREVIEW</Text>
            <Text style={styles.cardPreviewNumber}>•••• •••• •••• ••••</Text>
            <View style={styles.cardPreviewFooter}>
              <View>
                <Text style={styles.cardPreviewFooterLabel}>Card Holder</Text>
                <Text style={styles.cardPreviewFooterValue}>YOUR NAME</Text>
              </View>
              <View>
                <Text style={styles.cardPreviewFooterLabel}>Expires</Text>
                <Text style={styles.cardPreviewFooterValue}>MM/YY</Text>
              </View>
            </View>
          </View>

          {/* Form Fields */}
          <View
            style={[
              styles.formCard,
              {backgroundColor: isDarkMode ? '#1C1C1E' : '#FFFFFF'},
            ]}>
            <Text
              style={[
                styles.formLabel,
                {color: isDarkMode ? '#CCCCCC' : '#666666'},
              ]}>
              Card Number
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  color: isDarkMode ? '#FFFFFF' : '#000000',
                  backgroundColor: isDarkMode ? '#2C2C2E' : '#F5F5F5',
                },
              ]}
              placeholder="1234 5678 9012 3456"
              placeholderTextColor={isDarkMode ? '#666666' : '#999999'}
              keyboardType="numeric"
              maxLength={19}
            />

            <Text
              style={[
                styles.formLabel,
                {color: isDarkMode ? '#CCCCCC' : '#666666'},
              ]}>
              Card Holder Name
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  color: isDarkMode ? '#FFFFFF' : '#000000',
                  backgroundColor: isDarkMode ? '#2C2C2E' : '#F5F5F5',
                },
              ]}
              placeholder="John Doe"
              placeholderTextColor={isDarkMode ? '#666666' : '#999999'}
              autoCapitalize="words"
            />

            <View style={styles.row}>
              <View style={styles.halfInput}>
                <Text
                  style={[
                    styles.formLabel,
                    {color: isDarkMode ? '#CCCCCC' : '#666666'},
                  ]}>
                  Expiry Date
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      color: isDarkMode ? '#FFFFFF' : '#000000',
                      backgroundColor: isDarkMode ? '#2C2C2E' : '#F5F5F5',
                    },
                  ]}
                  placeholder="MM/YY"
                  placeholderTextColor={isDarkMode ? '#666666' : '#999999'}
                  keyboardType="numeric"
                  maxLength={5}
                />
              </View>

              <View style={styles.halfInput}>
                <Text
                  style={[
                    styles.formLabel,
                    {color: isDarkMode ? '#CCCCCC' : '#666666'},
                  ]}>
                  CVV
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      color: isDarkMode ? '#FFFFFF' : '#000000',
                      backgroundColor: isDarkMode ? '#2C2C2E' : '#F5F5F5',
                    },
                  ]}
                  placeholder="123"
                  placeholderTextColor={isDarkMode ? '#666666' : '#999999'}
                  keyboardType="numeric"
                  maxLength={4}
                  secureTextEntry
                />
              </View>
            </View>
          </View>

          {/* Add Card Button */}
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>Add Card</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    fontSize: 28,
    color: '#667EEA',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  placeholder: {
    width: 44,
  },
  content: {
    flex: 1,
  },
  form: {
    padding: 20,
  },
  cardPreview: {
    height: 200,
    borderRadius: 16,
    padding: 24,
    justifyContent: 'space-between',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  gradientCard: {
    backgroundColor: '#667EEA',
  },
  cardPreviewLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    opacity: 0.8,
  },
  cardPreviewNumber: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 2,
  },
  cardPreviewFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardPreviewFooterLabel: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 10,
    marginBottom: 4,
  },
  cardPreviewFooterValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  formCard: {
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    height: 48,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  halfInput: {
    flex: 1,
  },
  addButton: {
    backgroundColor: '#667EEA',
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#667EEA',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AddNewCard;
