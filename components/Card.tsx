/**
 * Card Component
 * Displays a credit/debit card
 * @format
 */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export interface Card {
  id: string;
  cardType: string;
  lastFourDigits: string;
  cardHolderName?: string;
  backgroundColor: string;
}

interface CardProps {
  card: Card;
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({card, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: card.backgroundColor}]}
      onPress={onPress}>
      <View style={styles.cardContent}>
        <Text style={styles.cardType}>{card.cardType}</Text>
        <View style={styles.cardNumberContainer}>
          <Text style={styles.dots}>••••</Text>
          <Text style={styles.lastFourDigits}>{card.lastFourDigits}</Text>
        </View>
        {card.cardHolderName && (
          <Text style={styles.cardHolderName} numberOfLines={1}>
            {card.cardHolderName}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 160,
    height: 130,
    borderRadius: 12,
    marginRight: 16,
    padding: 16,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardType: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
  cardNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  dots: {
    fontSize: 18,
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  lastFourDigits: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  cardHolderName: {
    fontSize: 10,
    color: '#FFFFFF',
    opacity: 0.9,
    textTransform: 'uppercase',
  },
});

export default Card;
